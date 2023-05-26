import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const useProvider = (children: ReactNode) => {
    return <ChakraProvider>{children}</ChakraProvider>;
  };

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={useProvider(<Home />)} />
          <Route path="/login" element={useProvider(<Login />)} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
