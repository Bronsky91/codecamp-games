import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './SignUp'
import GameSelection from './GameSelection'
import TicTacToe from './TicTacToe'
import Simon from './Simon'
import '../App.css';

const App = props => (
  // Place Routes below in App Router
  <Router>
    <div>
      <Route exact path='/' component={GameSelection} />
      <Route path='/signup' component={SignUp}/>
      <Route path='/tic-tac-toe' component={TicTacToe}/>
      <Route path='/simon' component={Simon}/>
    </div>
    </Router>
)

App.propTypes = {

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);