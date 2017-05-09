import React from 'react';
import PropTypes from 'prop-types';

const Card = ( {cardData} ) => {
  // console.log(cardData);

  const cardContentsArr = []
  Object.keys(cardData).forEach( property => {
    if(cardData[property] !== null && property !== 'Type' && property !== 'Name') {
      cardContentsArr.push(<h3>{ property }:{ cardData[property] }</h3>)
    }
  })
  console.log(cardContentsArr);

  return(
    <div className='card-container'>
      <div className='card-header'>
        <div className='card-title'>{ cardData.Name }</div>
        <div className='star-icon'>Star</div>
      </div>
      <div className='card-contents'>{ cardContentsArr }</div>
    </div>
  )

}

Card.propTypes = {
  cardObj: PropTypes.object
}

export default Card
