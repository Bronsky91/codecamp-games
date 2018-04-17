import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { playerMove } from '../Actions/tactoeActions'
import { getPlayer } from '../Reducers/tactoeReducer'

class TicTacToeSquare extends Component {
    render = () => {
        return (
            <button className='tsquare' onClick={()=> this.props.squareValue == null ? this.props.playerMove(this.props.index, this.props.player) : null}>
                <div className='squareValue'>{this.props.squareValue}</div> 
            </button>
            )
    } 
}
   

TicTacToeSquare.propTypes = {
    player: PropTypes.string,
    playerMove: PropTypes.func
}

const mapStateToProps = state => ({
    player: getPlayer(state),
});

const mapDispatchToProps = {
    playerMove,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeSquare);
