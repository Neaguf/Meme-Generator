import "./App.css";
import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
export default function App() {
  let res = React.useState("hello");
  console.log(res);
  return (
    <div>
      <Header />

      <Meme />
    </div>
  );
}
