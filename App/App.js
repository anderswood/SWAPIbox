import React, { Component } from 'react';
import Button from './Button/Button.js';
import CardList from './CardList/CardList.js';
import deletePeopleURL from './Scrubbers/deletePeopleURL'
import speciesScrubber from './Scrubbers/speciesScrubber';
import speciesOrdered from './Scrubbers/speciesOrdered';
import peopleScrubber from './Scrubbers/peopleScrubber';
import planetScrubber from './Scrubbers/planetScrubber';
import vehicleScrubber from './Scrubbers/vehicleScrubber';
import peopleNeedPlanets from './Scrubbers/peopleNeedPlanets';
import planetsNeedPeople from './Scrubbers/planetsNeedPeople';
import filmsScrubber from './Scrubbers/filmsScrubber';
import Favorites from './Favorites/favorites.js';

let film;

class App extends Component {
  constructor() {
    super()
    this.state = {
      cardArr: [],
      film: '',
      species: [],
      people: [],
      planet: [],
      vehicle: [],
      favorites: [],
      fetchInProgress: true,
      activeButton: 'favorites'
    }
  }

  componentWillMount() {
    filmsScrubber().then(filmArr => {
      let filmSelector = Math.floor(Math.random() * (7 - 0)) + 0
      let storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      this.setState({
        film: filmArr[filmSelector],
        favorites: storedFavorites,
        cardArr: storedFavorites || []
      })
    })
  }

  componentDidMount () {
    let species;
    let planets;
    let vehicles;
    let people;

    vehicleScrubber().then(vehicleScrubbedArr => {
      vehicles = vehicleScrubbedArr
    })

    speciesScrubber()
      .then( speciesScrubbedArr => {
        species = speciesOrdered(speciesScrubbedArr)
        planetScrubber()
        .then( planetScrubbedArr => {
          peopleScrubber().then(peopleScrubbedArr => {
            people = peopleNeedPlanets(peopleScrubbedArr, planetScrubbedArr, species)
            planets = planetsNeedPeople(planetScrubbedArr, people)
            people = deletePeopleURL(people)
            this.setState({species: species,
                           planet: planets,
                           people: people,
                           vehicle: vehicles,
                           fetchInProgress: false
                         })
            console.log('APIs are dunzo');
          })
        })
      })

  }

  updateCardsOnClick(category) {
    this.setState({
      cardArr: this.state[category],
      activeButton: category
    })
  }

  updateFavoritesOnClick(cardToFavorite) {
    let favoriteArr = this.state.favorites;
    let favoriteIndex = favoriteArr.indexOf(cardToFavorite);
    favoriteIndex !== -1 ? favoriteArr.splice(favoriteIndex, 1) : favoriteArr.push(cardToFavorite);
    this.setState({
      favorites: favoriteArr
    })
    localStorage.setItem('favorites', JSON.stringify(favoriteArr))
  }

  areThereFavorites() {
    if(!this.state.favorites.length && this.state.cardArr === this.state.favorites) {
      return(
        <div id='no-favs'><h2>no favorited things to display</h2></div>
      )
    }
  }

  isFetching() {
    if (this.state.fetchInProgress) {
      return (
        <div id='api-fetching'><img id='lightspeed' src="../images/lightspeed.gif"/></div>
      )
    }
  }

  render() {
    // console.log('cardArr: ', this.state.cardArr);
    return (
      <div id='main-container'>
          <div id='aside-container'>
            <aside id='synopsis-title'>
              <div id='synopsis'><p key='1'>{this.state.film}</p></div>
            </aside>
          </div>
        <div id='content-container'>
          <header id='header-container'>
            <h1>SWAPI-box</h1>
          </header>
          <section id='button-container'>
            <Button className='button' type={ 'people' }
                    updateCards={ this.updateCardsOnClick.bind(this) }
                    activeButton={ this.state.activeButton }/>
            <Button className='button' type={ 'planet' }
                    updateCards={ this.updateCardsOnClick.bind(this) }
                    activeButton={ this.state.activeButton }/>
            <Button className='button' type={ 'vehicle' }
                    updateCards={ this.updateCardsOnClick.bind(this) }
                    activeButton={ this.state.activeButton }/>
            <Favorites  type={ 'favorites' }
                        updateCards={ this.updateCardsOnClick.bind(this)}
                        favoriteCount={ this.state.favorites.length }
                        activeButton={ this.state.activeButton }/>
          </section>
            { this.isFetching() }
            { this.areThereFavorites() }
            <CardList className='card-list'
                      cardArr={ this.state.cardArr }
                      favCardArr={ this.state.favorites }
                      clickOnFavorite={ this.updateFavoritesOnClick.bind(this) }/>
        </div>
      </div>
    )
  }

}

export default App;
