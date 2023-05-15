import React, { ChangeEvent, useCallback, useState } from "react";
import { Container } from "./style";
import Chat from "../../Components/Chat";
import { Button, Input, useToast } from "@chakra-ui/react";
import axios from "axios";
import { Channel, Client, Message } from "twilio-chat";

export const Home: React.FC = () => {
  const [user, setUser] = useState("");
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [joinedRoom, setJoinedRoom] = useState<Channel>();
  const [listMessages, setListMessages] = useState<Message[]>([]);
  const toast = useToast();

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

  const handleNotify = (room: Channel) => {
    sendNotificationJoinedRoom(room);
    sendNotificationOtherJoinedRoom(room);
    messageAddedNotification(room);
    sendNotificationOtherLeavesRoom(room);
  };

  const createOrJoinRoom = useCallback(
    (client: Client) => {
      console.log("room", roomName);
      client
        .getChannelByUniqueName(roomName)
        .then((room) => {
          handleNotify(room);
        })
        .catch(() => {
          client
            .createChannel({
              uniqueName: roomName,
              friendlyName: roomName,
            })
            .then((room) => {
              handleNotify(room);
            })
            .catch(() => {
              toast({
                title: "Error",
                description: "Couldnt create room",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            });
        });
    },
    [roomName]
  );

  const handleConnect = useCallback(async () => {
    const { token } = await handleGenerateToken(user);

    const client = new Client(token);

    if (joinedRoom) return;

    client
      .getSubscribedChannels()
      .then(() => createOrJoinRoom(client))
      .catch((e: Error) => {
        toast({
          title: "Error",
          description: "An error occurred",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
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
      toast({
        title: "Joined room.",
        description: "Now you can send messages.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    });
  }, []);

  const handleSendMessage = useCallback((room: Channel, text: string) => {
    if (!room || !text) return;
    room.sendMessage(text);
    setMessage("");
  }, []);

  const sendNotificationOtherJoinedRoom = useCallback((room: Channel) => {
    room.on("memberJoined", (member) => {
      console.log(member.identity + "Entrou na sala");
      toast({
        title: `${member.identity} joined room.`,
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    });
  }, []);

  const sendNotificationOtherLeavesRoom = useCallback((room: Channel) => {
    room.on("memberLeft", (member) => {
      toast({
        title: `${member.identity} left room.`,
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    });
  }, []);

  return (
    <Container>
      {joinedRoom ? (
        <>
          <Chat
            channelName={roomName}
            messages={listMessages}
            onChange={(e) => setMessage(e.target.value)}
            onSubmit={() => handleSendMessage(joinedRoom, message)}
          />
        </>
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
