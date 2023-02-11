import React from "react";
import * as C from "./styles/CardStyle";
const Card = ({ title, icon,cash }) => {
  return (
    <C.informacao>
      <h1>{title}</h1>
      <span>{icon}</span>
      <C.value>{cash}</C.value>
    </C.informacao>
  );
};

export default Card;
