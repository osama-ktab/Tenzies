import React from "react";
import { useState } from "react";
import "./App.css";
import Numbers from "./Numbers";
import Confetti from "react-confetti";
// import { preconnect } from "react-dom";

function App() {
  const [dice, setdice] = useState(() => generateAllNewDice());
  const [windowSize, setWindowSize] = React.useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function generateAllNewDice() {
    return Array.from({ length: 10 }, (_, index) => {
      return {
        id: index + 1,
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
      };
    });
  }

  const isWin =
    dice.every((dic) => dic.value === dice[0].value) &&
    dice.every((dic) => dic.isHeld === true);

  function hold(id) {
    setdice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      }),
    );
  }

  function rollDice() {
    setdice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.floor(Math.random() * 6) + 1 };
      }),
    );
  }

  function NewGame() {
    setdice(generateAllNewDice());
  }

  return (
    <>
      <main>
        {isWin && (
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            style={{ position: "fixed", top: 0, left: 0 }}
          />
        )}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="numbers-container">
          {dice.map((num) => (
            <Numbers
              value={num.value}
              key={num.id}
              isHeld={num.isHeld}
              hold={hold}
              id={num.id}
            />
          ))}
        </div>
        <div className="buttons">
          {" "}
          <button onClick={isWin ? NewGame : rollDice}>
            {isWin ? "New Game" : "Roll"}
          </button>
          <button onClick={NewGame}>Reset Game</button>
        </div>
      </main>
    </>
  );
}

export default App;
