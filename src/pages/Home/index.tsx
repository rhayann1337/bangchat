import React, { useState } from "react";
import Chat from "../Components/Chat";
import { Container } from "./style";

export const Home: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setMessage(inputValue);
  };

  return (
    <Container>
      <Chat messages={[]} onChange={(e: any) => handleInputChange(e)} />
    </Container>
  );
};

export default Home;
