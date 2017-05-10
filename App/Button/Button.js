import React from 'react';
import PropTypes from 'prop-types';

const Button = ( {type, updateCards} ) => {

  const handleClick = (category) => {
    updateCards(category)
  }

  return(
    <button onClick={ e => handleClick(e.target.innerText) }><h4>{ type }</h4></button>
  )

}

Button.propTypes = {
  type: PropTypes.string
}

export default Button
