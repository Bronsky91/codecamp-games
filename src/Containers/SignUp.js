import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignUpForm from '../Components/SignUpForm'
import { Redirect } from 'react-router-dom';


class SignUp extends Component {

  submit = values => {
    console.log(values.username, values.password)
  }
  render = () => {
    return (
      <SignUpForm onSubmit={this.submit} />
    );
  }
} 

SignUp.propTypes = {

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);