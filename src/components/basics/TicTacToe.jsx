
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Square(props) {
    return <button 
                className="square"
                style={{
                    border: '1px solid #a9a9a9',
                    width: '40px',
                    height: '40px'
                }}
                onClick={props.onClick}
            >{props.value}</button>
}

function Board({xIsNext, squares, onPlay}) {
    const winner = checkWinner(squares);
    let status = winner ? "the winner is: " + winner : "next move is: " + (xIsNext ? "X" : "O");
    
    function handleClick(i) {
        if(squares[i]) {
            return;
        }

        if(winner) {
            console.log('The winner is: ' + winner);
            return;
        }

        console.log('clicked!!');

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
    };

    return(
        <>
            <div>{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
        </>
    );
}

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove %2 === 0;
    const currentState = history[currentMove];

    function updateHistory(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(move) {
        setCurrentMove(move);
    }

    const moves = history.map((squares, move) => {
        let description;

        if(move > 0) {
            description = 'Go to move # ' + move;
        } else {
            description = 'Go to start';
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    });

    return (
        <div className='game'>
            <div>
                <Link to="login">Go to login</Link>
            </div>
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentState} onPlay={updateHistory} />
            </div>
            <div className='game-history'>
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    );
}

function checkWinner(squares) {
    const winners = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let i = 0; i < winners.length; i++) {
        const [a, b, c] = winners[i];

        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

function TicTacToe() {
    return <Game></Game>;
}

export default TicTacToe;