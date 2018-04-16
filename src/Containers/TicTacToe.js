import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TicTacToe = props => (
    <div>
        Tic Tac Toe Placeholder
    </div>

)

TicTacToe.propTypes = {

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);