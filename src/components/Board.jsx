// Board.js
import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <div key={index} className="square-container">
          <Square value={square} onClick={() => onClick(index)} />
        </div>
      ))}
    </div>
  );
};

export default Board;
