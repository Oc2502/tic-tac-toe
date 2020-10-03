import TicTacToe from './TicTacToe';
import React from 'react';
import style from './style.css'
// import React, {useState} from 'react';


class App extends React.Component {
    
    render() { 
        return ( 
            <div>
                <h1>tic tac toe </h1>
                <TicTacToe/>
            </div>
        );
    }
}
 
export default App;