import React from "react";
import { Container, TextAuthor, TextDate, TextMessage } from "./style";

export type MessageProps = {
  author: string;
  message: string;
  date?: string;
};

export const Message: React.FC<MessageProps> = ({ message, author, date }) => {
  return (
    <Container>
      <TextAuthor>{author}</TextAuthor>
      <TextMessage>{message}</TextMessage>
      <TextDate>{date}</TextDate>
    </Container>
  );
};

export default Message;
