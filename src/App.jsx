// import React from "react";
// import { useState } from "react";
// import "./App.css";
// import Numbers from "./Numbers";
// import Confetti from "react-confetti";
// // import { preconnect } from "react-dom";

// function App() {
//   const [dice, setdice] = useState(() => generateAllNewDice());
//   const [windowSize, setWindowSize] = React.useState({
//     width: typeof window !== "undefined" ? window.innerWidth : 0,
//     height: typeof window !== "undefined" ? window.innerHeight : 0,
//   });

//   React.useEffect(() => {
//     function handleResize() {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     }

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   React.useEffect(() => {
//     function handleResize() {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     }

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   function generateAllNewDice() {
//     return Array.from({ length: 10 }, (_, index) => {
//       return {
//         id: index + 1,
//         value: Math.floor(Math.random() * 6) + 1,
//         isHeld: false,
//       };
//     });
//   }

//   const isWin =
//     dice.every((dic) => dic.value === dice[0].value) &&
//     dice.every((dic) => dic.isHeld === true);

//   function hold(id) {
//     setdice((oldDice) =>
//       oldDice.map((die) => {
//         return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
//       }),
//     );
//   }

//   function rollDice() {
//     setdice((oldDice) =>
//       oldDice.map((die) => {
//         return die.isHeld
//           ? die
//           : { ...die, value: Math.floor(Math.random() * 6) + 1 };
//       }),
//     );
//   }

//   function NewGame() {
//     setdice(generateAllNewDice());
//   }

//   return (
//     <>
//       <main>
//         {isWin && (
//           <Confetti
//             width={windowSize.width}
//             height={windowSize.height}
//             style={{ position: "fixed", top: 0, left: 0 }}
//           />
//         )}
//         <h1 className="title">Tenzies</h1>
//         <p className="instructions">
//           Roll until all dice are the same. Click each die to freeze it at its
//           current value between rolls.
//         </p>
//         <div className="numbers-container">
//           {dice.map((num) => (
//             <Numbers
//               value={num.value}
//               key={num.id}
//               isHeld={num.isHeld}
//               hold={hold}
//               id={num.id}
//             />
//           ))}
//         </div>
//         <div className="buttons">
//           {" "}
//           <button onClick={isWin ? NewGame : rollDice}>
//             {isWin ? "New Game" : "Roll"}
//           </button>
//           <button onClick={NewGame}>Reset Game</button>
//         </div>
//       </main>
//     </>
//   );
// }

// export default App;
//=====================================================================================
// import React from "react";
// import { useState, useEffect } from "react";
// import "./App.css";
// import Numbers from "./Numbers";
// import Confetti from "react-confetti";

// function App() {
//   const [dice, setdice] = useState(() => generateAllNewDice());
//   const [seconds, setSeconds] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== "undefined" ? window.innerWidth : 0,
//     height: typeof window !== "undefined" ? window.innerHeight : 0,
//   });

//   useEffect(() => {
//     function handleResize() {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     }
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   function generateAllNewDice() {
//     return Array.from({ length: 10 }, (_, index) => {
//       return {
//         id: index + 1,
//         value: Math.floor(Math.random() * 6) + 1,
//         isHeld: false,
//       };
//     });
//   }

//   const isWin =
//     dice.every((dic) => dic.value === dice[0].value) &&
//     dice.every((dic) => dic.isHeld === true);

//   useEffect(() => {
//     let interval = null;
//     if (isActive && !isWin) {
//       interval = setInterval(() => {
//         setSeconds((prev) => prev + 1);
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isActive, isWin]);

//   function hold(id) {
//     if (!isActive) setIsActive(true);

//     setdice((oldDice) =>
//       oldDice.map((die) => {
//         return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
//       }),
//     );
//   }

//   function rollDice() {
//     setdice((oldDice) =>
//       oldDice.map((die) => {
//         return die.isHeld
//           ? die
//           : { ...die, value: Math.floor(Math.random() * 6) + 1 };
//       }),
//     );
//   }

//   function NewGame() {
//     setdice(generateAllNewDice());
//     setSeconds(0);
//     setIsActive(false);
//   }

//   return (
//     <>
//       <main>
//         {isWin && (
//           <Confetti
//             width={windowSize.width}
//             height={windowSize.height}
//             style={{ position: "fixed", top: 0, left: 0 }}
//           />
//         )}
//         <h1 className="title">Tenzies</h1>

//         <div className={`timer-display ${isWin ? "is-win-timer" : ""}`}>
//           Time: <span>{seconds}s</span>
//         </div>

//         <p className="instructions">
//           Roll until all dice are the same. Click each die to freeze it at its
//           current value between rolls.
//         </p>
//         <div className="numbers-container">
//           {dice.map((num) => (
//             <Numbers
//               value={num.value}
//               key={num.id}
//               isHeld={num.isHeld}
//               hold={hold}
//               id={num.id}
//             />
//           ))}
//         </div>
//         <div className="buttons">
//           <button onClick={isWin ? NewGame : rollDice}>
//             {isWin ? "New Game" : "Roll"}
//           </button>
//           <button onClick={NewGame}>Reset Game</button>
//         </div>
//       </main>
//     </>
//   );
// }

// export default App;
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Numbers from "./Numbers";
import Confetti from "react-confetti";

function App() {
  const [dice, setdice] = useState(() => generateAllNewDice());
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [bestTime, setBestTime] = useState(
    () => localStorage.getItem("bestTime") || null,
  );

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const isWin =
    dice.every((dic) => dic.value === dice[0].value) &&
    dice.every((dic) => dic.isHeld === true);

  // منطق العداد وحفظ أفضل وقت
  useEffect(() => {
    let interval = null;
    if (isActive && !isWin) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (isWin) {
      clearInterval(interval);
      // حفظ أفضل وقت إذا كان الوقت الحالي أقل من المسجل سابقاً
      if (!bestTime || seconds < bestTime) {
        setBestTime(seconds);
        localStorage.setItem("bestTime", seconds);
      }
    }
    return () => clearInterval(interval);
  }, [isActive, isWin, seconds, bestTime]);

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function generateAllNewDice() {
    return Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
    }));
  }

  function hold(id) {
    if (!isActive) setIsActive(true);
    setdice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  function rollDice() {
    if (!isActive) setIsActive(true);
    setdice((oldDice) =>
      oldDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.floor(Math.random() * 6) + 1 },
      ),
    );
  }

  function NewGame() {
    setdice(generateAllNewDice());
    setSeconds(0);
    setIsActive(false);
  }

  return (
    <main>
      {isWin && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}

      <h1 className="title">Tenzies</h1>

      <div className="stats-container">
        <div className={`timer-display ${isWin ? "is-win-timer" : ""}`}>
          Time: <span>{seconds}s</span>
        </div>
      </div>

      {bestTime && <p className="best-time">🏆 Best Time: {bestTime}s</p>}

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
        <button className="main-button" onClick={isWin ? NewGame : rollDice}>
          {isWin ? "New Game" : "Roll"}
        </button>
        <button className="reset-button" onClick={NewGame}>
          Reset Game
        </button>
      </div>
    </main>
  );
}

export default App;
