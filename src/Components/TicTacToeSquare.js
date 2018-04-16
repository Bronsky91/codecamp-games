import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { playerMove } from '../Actions/tactoeActions'
import { getPlayer } from '../Reducers/tactoeReducer'

class TicTacToeSquare extends Component {
    render = () => {
        return (
            <button className='tsquare' onClick={()=> this.props.playerMove(this.props.index, this.props.player)}>
                {this.props.squareValue}
            </button>
            )
    } 
}
   

TicTacToeSquare.propTypes = {
    player: PropTypes.func,
    playerMove: PropTypes.object
}

const mapStateToProps = state => ({
    player: getPlayer(state),
});

const mapDispatchToProps = {
    playerMove,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeSquare);
