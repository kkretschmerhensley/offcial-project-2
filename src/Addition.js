import React from 'react';

export const Addition = (props) => {
  return (
    <>
      <h1>{props.numberOne} + {props.numberTwo} = {props.numberOne + props.numberTwo}</h1>
    </>
  );
};
