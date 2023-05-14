import React, { ChangeEvent, useCallback, useState } from "react";
import { Container } from "./style";
import Chat from "../../Components/Chat";
import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { Channel, Client, Message } from "twilio-chat";

export const Home: React.FC = () => {
  const [user, setUser] = useState("");
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [joinedRoom, setJoinedRoom] = useState<Channel>();
  const [listMessages, setListMessages] = useState<Message[]>([]);

  const handleGenerateToken = useCallback(
    async (user: string) => {
      const response = await axios.get(`http://localhost:5050/token/${user}`);
      console.log(response.data);
      const { token, identity } = response.data;

      return { token, identity };
    },
    [user]
  );

  const handleJoin = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleConnect();
  };

  const createOrJoinRoom = useCallback((client: Client) => {
    client
      .getChannelByUniqueName(roomName)
      .then((room) => {
        sendNotificationJoinedRoom(room);
        sendNotificationOtherJoinedRoom(room);
        messageAddedNotification(room);
      })
      .catch(() => {
        client
          .createChannel({
            uniqueName: roomName,
            friendlyName: roomName,
          })
          .then((room) => {
            sendNotificationJoinedRoom(room);
            sendNotificationOtherJoinedRoom(room);
            messageAddedNotification(room);
          })
          .catch(() => {
            console.log("Couldnt create room");
          });
      });
  }, []);

  const handleConnect = useCallback(async () => {
    const { token } = await handleGenerateToken(user);

    const client = new Client(token);
    console.log(client);

    if (joinedRoom) return;
    client
      .getSubscribedChannels()
      .then(() => createOrJoinRoom(client))
      .catch((e: Error) => console.log("deu pau", e));
  }, [user, joinedRoom, roomName]);

  const messageAddedNotification = useCallback((room: Channel) => {
    room.on("messageAdded", (message) => {
      setListMessages((previous) => [...previous, message]);
    });
  }, []);

  const sendNotificationJoinedRoom = useCallback((room: Channel) => {
    room.join().then(() => {
      setJoinedRoom(room);
      console.log(user + ` entrou no chat` + room.uniqueName);
    });
  }, []);

  const handleSendMessage = useCallback((room: Channel, text: string) => {
    if (!room) return;
    room.sendMessage(text);
  }, []);

  const sendNotificationOtherJoinedRoom = useCallback((room: Channel) => {
    room.on("memberJoined", (member) => {
      console.log(member.identity + "Entrou na sala");
    });
  }, []);

  return (
    <Container>
      {joinedRoom ? (
        <Chat
          messages={listMessages}
          onChange={(e) => setMessage(e.target.value)}
          onSubmit={() => handleSendMessage(joinedRoom, message)}
        />
      ) : (
        <form onSubmit={handleJoin}>
          <Input
            placeholder="User"
            size="lg"
            height={"40px"}
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
          <Input
            placeholder="Room name"
            size="lg"
            height={"40px"}
            onChange={(e) => setRoomName(e.target.value)}
            value={roomName}
          />
          <Button colorScheme="teal" variant="outline" type="submit">
            Join
          </Button>
        </form>
      )}
    </Container>
  );
};

export default Home;
