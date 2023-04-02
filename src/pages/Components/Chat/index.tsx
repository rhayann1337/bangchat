import { Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import Message from "../Message";
import {
  Container,
  ContainerMessages,
  ContainerSendMessage,
  Text,
} from "./style";

type ChatProps = {
  messages: any;
  onChange: (e: any) => void;
};

export const Chat: React.FC<ChatProps> = ({ onChange }) => {
  return (
    <Container>
      <Text>Channel name</Text>
      <ContainerMessages>
        <Message
          author={"James"}
          message={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          }
        />
        <Message author={"James"} message={"Lorem Ipsum "} />
        <Message
          author={"James"}
          message={
            " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          }
        />
        <Message
          author={"James"}
          message={"industry's standard dummy text ever since the 1500s"}
        />
      </ContainerMessages>

      <ContainerSendMessage>
        <Input
          placeholder="Type here"
          size="lg"
          height={"40px"}
          onChange={onChange}
        />
      </ContainerSendMessage>
    </Container>
  );
};

export default Chat;
