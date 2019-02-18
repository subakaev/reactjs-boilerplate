import React from 'react';
import PropTypes from 'prop-types';

const Main = props => (
  <div>
    <h1>Hello from ReactJS</h1>
    <div>
      <button onClick={props.decrement}>-</button>
      <span>{props.value}</span>
      <button onClick={props.increment}>+</button>
    </div>
  </div>
);

Main.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default Main;
