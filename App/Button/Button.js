import React from 'react';
import PropTypes from 'prop-types';

const Button = ( {type, updateCards, activeButton} ) => {

  const handleClick = () => {
    updateCards(type)
  }

  let buttonClass;
  activeButton === type ? buttonClass = 'active' : buttonClass = ''

  return(
    <button className={ buttonClass }
            onClick={ e => handleClick() }><h4>{ type }</h4></button>
  )

}

Button.propTypes = {
  type: PropTypes.string,
  updateCards: PropTypes.func
}

export default Button
