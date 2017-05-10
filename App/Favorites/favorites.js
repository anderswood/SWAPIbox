import React from 'react';
import PropTypes from 'prop-types';

const Favorites = ( {type, updateCards} ) => {

  const handleClick = (category) => {
    updateCards(category)
    // console.log(category);
  }

  return(
    <button id='favorites-container' onClick={ e => handleClick(e.target) }>
      <h4 id='view-favorites'>View Favorites</h4>
      <div id='favorites-box'>0</div>
    </button>
  )

}

Favorites.propTypes = {
  type: PropTypes.string
}

export default Favorites
