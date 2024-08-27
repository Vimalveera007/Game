import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import man from "../img/man.png"
const FirstPage = () => {
  return (
    <div className="game">
        <img src={man} alt="" className="man"/>
      <Link to="/game">
        <button className="game-btn">Let's Start Game</button>
      </Link>
    </div>
  );
};

export default FirstPage;
