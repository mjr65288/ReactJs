import React from "react";
import "./card-list.css";
import { Card } from "../card/card";

// const Cardlist = (props) => (
//   <div className="card-list">
//     {props.monsters.map(monster => (
//       <h1 key={monster.id}>{monster.name}</h1>
//     ))}
//   </div>
// );
const Cardlist = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default Cardlist;
