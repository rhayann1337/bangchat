import React from "react";
import Message from "../Components/Message";
import { Container } from "./style";

export const Home: React.FC = () => {
  return (
    <Container>
      <Message
        author={"James"}
        message={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }
      />
    </Container>
  );
};

export default Home;
