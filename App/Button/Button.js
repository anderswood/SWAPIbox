import React from 'react';
import PropTypes from 'prop-types';

const Button = ( {type, updateCards} ) => {

  const handleClick = () => {
    updateCards(type)
  }

  return(
    <button onClick={ e => handleClick() }><h4>{ type }</h4></button>
  )

}

Button.propTypes = {
  type: PropTypes.string
}

export default Button
