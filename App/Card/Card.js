import React from 'react';
import PropTypes from 'prop-types';

const Card = ( {cardData, clickOnFav, favArr} ) => {

  const cardContentsArr = []
  Object.keys(cardData).forEach( (property, i) => {
    if(cardData[property] !== null && property !== 'Type' && property !== 'Name') {
      if(property == 'Residents' && cardData[property].length == 0) {
        cardContentsArr[cardContentsArr.length] = <h3 key={ cardContentsArr.length }>Residents:</h3>
        cardContentsArr[cardContentsArr.length] = <h6 key={ cardContentsArr.length }>{ 'None' }</h6>
      }
      else if (property == 'Residents') {
        cardContentsArr[cardContentsArr.length] = <h3 key={ cardContentsArr.length }>Residents:</h3>
        cardData[property].forEach((name, indy) => {
          cardContentsArr[cardContentsArr.length] = <h6 key={ cardContentsArr.length }>{ name }</h6>
        })
      } else {
        cardContentsArr[cardContentsArr.length] = <h3 key={cardContentsArr.length}>{ property }: { cardData[property] }</h3>
      }
    }
  })


  const isFavorite = () => {
    const temp = favArr.indexOf(cardData);
    return temp === -1 ? 'star-icon' : 'star-icon favorited';
  }

  const handleFavoriteClick = (targetElement) => {
    targetElement.classList.toggle('favorited')
    clickOnFav(cardData)
  }

  return(
    <div className='card-container'>
      <div className='card-header'>
        <div className='card-title'><h2>{ cardData.Name }</h2></div>
          <div className={ isFavorite() }
                onClick={ e => { handleFavoriteClick(e.target) } }>
          </div>
      </div>
      <div className='card-contents'>{ cardContentsArr }</div>
    </div>
  )

}

Card.propTypes = {
  cardObj: PropTypes.object,
  clickOnFav: PropTypes.func,
  favArr: PropTypes.array
}

export default Card
