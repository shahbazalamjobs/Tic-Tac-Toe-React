// App.js
import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

const initialState = {
  squares: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const App = () => {
  const [state, setState] = useState(initialState);

  const handleClick = (index) => {
    if (state.squares[index] || state.winner) return;

    const newSquares = [...state.squares];
    newSquares[index] = state.currentPlayer;

    const winner = calculateWinner(newSquares);
    setState({
      squares: newSquares,
      currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
      winner: winner
    });
  };

  const resetGame = () => {
    setState(initialState);
  };

  const status = state.winner
    ? `Winner: ${state.winner}`
    : `Next player: ${state.currentPlayer}`;

  return (
    <div className="app">
      <div className="status">{status}</div>
      <Board squares={state.squares} onClick={handleClick} />
      <button className="reset" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default App;
