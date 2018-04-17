import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TicTacToeSquare from '../Components/TicTacToeSquare';
import '../Styles/tictactoe.css'
import { playerChoice } from '../Actions/tactoeActions';
import { currentBoard, getPlayer } from '../Reducers/tactoeReducer';

class TicTacToeBoard extends Component {

    renderSquare(i) {
        return <TicTacToeSquare index={i} squareValue = {this.props.currentBoard[i]}  />
    }
    
    calculateWinner(squares) {
        squares = Object.values(squares)
        console.log(squares)
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
            console.log(squares[a])
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
            }
          }
          return null;
    }

    render() {

        const winner = this.calculateWinner(this.props.currentBoard);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          null
        }
        
        return (
        <div>
            <h1 className='theader'>Tic Tac Toe</h1>
            <h2 className='theader'>Choose X or O:</h2>
            <div className='playerChoice'>
                <button className='choiceButton' onClick={()=> this.props.playerChoice('X')}>X</button>
                <button className='choiceButton' onClick={()=> this.props.playerChoice('O')}>O</button>
            </div>
            <div className='tgameboard'>
                <div className='trow'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>  
                <div className='trow'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='trow'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        </div>
        );
    }
}

TicTacToeBoard.propTypes = {
    playerChoice: PropTypes.func,
    currentBoard: PropTypes.object,
    player: PropTypes.string,
}

const mapStateToProps = state => ({
    currentBoard: currentBoard(state),
    player: getPlayer(state)
});

const mapDispatchToProps = {
    playerChoice,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeBoard);