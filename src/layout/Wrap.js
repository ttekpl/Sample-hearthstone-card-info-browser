import React from "react";
import "../styles/Wrap.css";

const Wrap = ({ data }) => {
  return (
    <main className="content">
      <h1>Overview</h1>
      {data.err ? null : (
        <>
          <img src={data.img} alt="" />
          <h2>Card name: {data.name}</h2>
          <h2>Attack: {data.attack}</h2>
          <h2>Cost: {data.cost} Mana</h2>
          <h2>Health: {data.health}</h2>
          <h2>Rarity: {data.rarity}</h2>
          <h2>Text: {data.text}</h2>
          <h2>Class: {data.playerClass}</h2>
          <h2>Type: {data.type}</h2>
          <h2>Elite: {data.elite}</h2>
        </>
      )}
    </main>
  );
};

export default Wrap;
