import React from 'react';
import PropTypes from 'prop-types';

const Main = props => (
  <div className="container">
    <h1 className="some-user-class">Hello from ReactJS</h1>
    <div>
      <button className="btn btn-primary mr-3" onClick={props.decrement}>-</button>
      <span>{props.value}</span>
      <button className="btn btn-primary ml-3" onClick={props.increment}>+</button>
    </div>
  </div>
);

Main.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default Main;
