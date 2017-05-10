import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';


const CardList = ( {cardArr, type, clickOnFavorite, favCardArr} ) => {
  if (!cardArr.length) {
    return <div></div>
  }



  const cardListArr = cardArr.map( (cardObj, i) =>{
    return <Card cardData={ cardObj }
                 key={ cardObj.Name+i }
                 type={ type }
                 favArr={ favCardArr }
                 clickOnFav={ clickOnFavorite }/>
  })


  return(
    <div id='card-list-container'>{ cardListArr }</div>
  )

}

Card.propTypes = {
  cardArr: PropTypes.array
}

export default CardList
