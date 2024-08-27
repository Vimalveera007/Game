import React, { useState } from "react";
import Confetti from "react-confetti";
import "./style.css";
const Game = () => {
  const [numbers, setNumbers] = useState([0, 0, 0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const generateRandomNumbers = () => {
    return [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
  };

  const checkNumbers = (nums) => {
    return nums.every((num) => num === nums[0]);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setIsWinner(false);
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    const intervalId = setInterval(() => {
      setNumbers(generateRandomNumbers());
    }, 100);

    setTimeout(() => {
      clearInterval(intervalId);
      setIsPlaying(false);

      let finalNumbers = numbers;

      if (newClickCount === 8) {
        const sameNumber = Math.floor(Math.random() * 10);
        finalNumbers = [sameNumber, sameNumber, sameNumber];
        setNumbers(finalNumbers);
        setClickCount(0);
      } else {
        finalNumbers = generateRandomNumbers();
        setNumbers(finalNumbers);
      }

      if (checkNumbers(finalNumbers)) {
        setModalMessage("Winner 🎉");
        setIsWinner(true);
      } else {
        setModalMessage("Better luck next time!");
      }

      setIsModalVisible(true);
    }, 3000);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="gamePage">
      {isWinner && <Confetti />}
      <div className="gameBoard">
        <div>
          <button className="num-btn">{numbers[0]}</button>
          <button className="num-btn">{numbers[1]}</button>
          <button className="num-btn">{numbers[2]}</button>
        </div>
        <div>
          <button
            className="play-btn"
            onClick={handlePlay}
            disabled={isPlaying}
          >
            {isPlaying ? "Playing..." : "Play"}
          </button>
        </div>
      </div>

      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
