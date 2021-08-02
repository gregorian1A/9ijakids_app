import React from 'react';
import "./style.css";

const Game = ({game}) => {

  return (
    <div className="game">
      <img src={game.GameImage} alt={game.GameTitle} />
      <h2>{game.GameTitle}</h2>
      <h3>{game.GameDescription}</h3>
      </div>
  )
}

export default Game;