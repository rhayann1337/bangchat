import { Input } from "@chakra-ui/react";
import React from "react";
import {
  Container,
  ContainerMessages,
  ContainerSendMessage,
  Text,
} from "./style";
import Message from "../Message";
import { Message as MessageType } from "twilio-chat";
import { format } from "date-fns";

type ChatProps = {
  channelName: string;
  messages: MessageType[];
  onChange: (e: any) => void;
  onSubmit: (e: any) => void;
};

export const Chat: React.FC<ChatProps> = ({
  onChange,
  onSubmit,
  messages,
  channelName,
}) => {
  return (
    <Container>
      <Text>Channel - {channelName}</Text>
      <ContainerMessages>
        {messages.map((message, index) => {
          const dateFormated = format(message.dateCreated, "h:mm a");
          return (
            <Message
              author={message.author}
              message={message.body}
              date={dateFormated}
              key={index}
            />
          );
        })}
      </ContainerMessages>

      <ContainerSendMessage>
        <Input
          placeholder="Type here"
          size="lg"
          height={"40px"}
          onChange={onChange}
          onSubmit={onSubmit}
        />
        <button onClick={onSubmit}>Send message</button>
      </ContainerSendMessage>
    </Container>
  );
};

export default Chat;
