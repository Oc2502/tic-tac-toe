
import React, {useState, useEffect} from 'react';
import MatrixBox from './MatrixBox';

const TicTacToe = () => {
   
    const [board, setBoard] = useState( Array(9).fill(null) )
    const [ currentPlayer, setCurrentPlayer] = useState('X')
    const [winner, setWinner] = useState(null)
   


    const onBoxClick = (value, key) => {
        const copyBorad = [...board]

        const winner = calculateWinner(board)
        if(winner){
            console.log('you wonnnn')
          return ;  
        } else {

            if(currentPlayer === 'X'){
                setCurrentPlayer('O')
            } else {
                setCurrentPlayer('X')
            }
        }
        copyBorad[key] = currentPlayer
        setBoard(copyBorad)
 
    }
  
    
    const calculateWinner = (board) => {
        console.log(board)
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                console.log('win')
                return setWinner(board[a]);
            }
        }
        return setWinner(null);
    }
    
    
    const renderMoves = () => {
        return <div>Start Game</div>
    }
    
    const renderBoard =  board.map((box, i) => {
            return <MatrixBox id={i} onClick={onBoxClick} player={currentPlayer} value={box} winner={winner} />
    })
            
        
    return ( 
        <>
            <div className="container">
                {renderBoard}
            </div>
            <div>
                {winner ? 'Winner: ' + winner : 'player: ' + {currentPlayer}}
            </div>
            <div>
                {renderMoves()}
            </div>
        </>
    );
    
}
 
export default TicTacToe;
