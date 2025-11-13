// src/TicTacToe.jsx
import { useState } from "react";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Turn: ${isXTurn ? "X" : "O"}`;

  function handleClick(index) {
    if (board[index] || winner) return;
    const updated = [...board];
    updated[index] = isXTurn ? "X" : "O";
    setBoard(updated);
    setIsXTurn(!isXTurn);
  }

  function restartGame() {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 40 }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Tic Tac Toe</h1>
      <div style={{ fontSize: 18, marginBottom: 12 }}>{status}</div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 80px)",
        gap: 8
      }}>
        {board.map((v, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            style={{
              width: 80, height: 80, fontSize: 28, fontWeight: "bold",
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: 8, border: "2px solid #222", cursor: "pointer",
              background: "#fff"
            }}
          >
            {v}
          </button>
        ))}
      </div>

      <button
        onClick={restartGame}
        style={{ marginTop: 16, padding: "8px 16px", borderRadius: 8, cursor: "pointer" }}
      >
        Restart Game
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
