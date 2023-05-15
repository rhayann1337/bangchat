import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url("https://images7.alphacoders.com/617/617537.jpg");

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  input {
    margin-top: 8px;
    width: inherit;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 8px 16px;
    background-color: white;
  }

  button {
    margin-top: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 8px 16px;
    background-color: white;
  }
`;
