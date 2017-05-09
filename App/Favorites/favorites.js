import React from 'react';
import PropTypes from 'prop-types';

const Favorites = ( {type} ) => {

  return(
    <div id='favorites-container'>
      <h4 id='view-favorites'>View Favorites</h4>
      <div id='favorites-box'>0</div>
    </div>
  )

}

Favorites.propTypes = {
  type: PropTypes.string
}

export default Favorites
