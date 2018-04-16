import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GameSelection = props => (
  <div>
    <ul>
        <h3>Choose a Game to Play</h3>
        <li>
            <Link to='/simon'>Simon Says</Link>
        </li>

        <li>
            <Link to='/tic-tac-toe'>Tic Tac Toe</Link>
        </li>
    </ul>
    <Link to='/signup'>Sign up to save scores</Link>
  
</div>

)

GameSelection.propTypes = {

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(GameSelection);