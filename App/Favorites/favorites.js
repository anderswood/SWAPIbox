import React from 'react';
import PropTypes from 'prop-types';

const Favorites = ( {type, updateCards, favoriteCount = 0} ) => {

  const handleClick = () => {
    updateCards(type)
  }

  return(
    <button id='favorites-container' onClick={ e => handleClick() }>
      <h4 id='view-favorites'>View Favorites</h4>
      <div id='favorites-box'><h4>{ favoriteCount }</h4></div>
    </button>
  )

}

Favorites.propTypes = {
  type: PropTypes.string,
  updateCards: PropTypes.func,
  favoriteCount: PropTypes.number
}

export default Favorites
