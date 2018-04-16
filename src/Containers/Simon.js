import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Simon = props => (
  <div>
    Simon Says Placeholder
</div>

)

Simon.propTypes = {

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Simon);