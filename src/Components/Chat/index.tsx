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

type ChatProps = {
  messages: any[];
  onChange: (e: any) => void;
  onSubmit: (e: any) => void;
};

export const Chat: React.FC<ChatProps> = ({ onChange, onSubmit, messages }) => {
  return (
    <Container>
      <Text>Channel name</Text>
      <ContainerMessages>
        {messages.map((message) => {
          return <Message author={message.author} message={message.body} />;
        })}
      </ContainerMessages>

      <ContainerSendMessage>
        <Input
          placeholder="Type here"
          size="lg"
          height={"40px"}
          onChange={onChange}
        />
        <button onClick={onSubmit}>send message</button>
      </ContainerSendMessage>
    </Container>
  );
};

export default Chat;
