import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TicTacToeSquare from '../Components/TicTacToeSquare';
import '../Styles/tictactoe.css'
import { playerChoice } from '../Actions/tactoeActions';
import { currentBoard } from '../Reducers/tactoeReducer';

class TicTacToeBoard extends Component {
    renderSquare(i) {
        return <TicTacToeSquare index={i} squareValue = {this.props.currentBoard[i]}  />
    }

    render() {

        return (
        <div>
            <h1 className='theader'>Tic Tac Toe</h1>
            <h2 className='theader'>Choose X or O:</h2>
            <div className='playerChoice'>
                <button onClick={()=> this.props.playerChoice('X')}>X</button>
                <button onClick={()=> this.props.playerChoice('O')}>O</button>
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
}

const mapStateToProps = state => ({
    currentBoard: currentBoard(state)
});

const mapDispatchToProps = {
    playerChoice,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeBoard);