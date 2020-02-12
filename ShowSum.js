import React from 'react';
import PropTypes from 'prop-types';

export default function ShowSum(props)
{
  return <p>{props.a} + {props.b} = {props.a + props.b}</p>;
}


// Check the data types of values passed into the ShowSum component.
// https://reactjs.org/docs/typechecking-with-proptypes.html
ShowSum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number
}

// Specifies the default values for props.
ShowSum.defaultProps = {
  a: 44,
  b: 24,
};