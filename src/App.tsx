import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
