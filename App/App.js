import React, { Component } from 'react';
// import asideTextArr from './Aside/aside.js';
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
    }
  }

  componentWillMount() {
    filmsScrubber().then(filmArr => {
      let filmSelector = Math.floor(Math.random() * (7 - 0)) + 0
      this.setState({film: filmArr[filmSelector]})
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
                           vehicle: vehicles
                         })
            console.log('APIs are dunzo');
          })
        })
      })

  }

  updateCardsOnClick(category) {

    this.setState({
      cardArr: this.state[category]
    })
  }

  updateFavoritesOnClick(cardToFavorite, targetElement) {
    console.log(typeof targetElement.className);
    let favoriteArr = this.state.favorites
    if(this.state.cardArr !== favoriteArr){
      // targetElement.classList ? favoriteArr.push(cardToFavorite) : remove
    }
    favoriteArr = Array.from(new Set(favoriteArr))
    this.setState({
      favorites: favoriteArr
    })
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
            <Button type={ 'people' }
                    updateCards={ this.updateCardsOnClick.bind(this) }/>
            <Button type={ 'planet' }
                    updateCards={ this.updateCardsOnClick.bind(this) }/>
            <Button type={ 'vehicle' }
                    updateCards={ this.updateCardsOnClick.bind(this) }/>
            <Favorites  type={ 'favorites' }
                        updateCards={ this.updateCardsOnClick.bind(this)}
                        favoriteCount={ this.state.favorites.length }/>
          </section>
            <CardList type={ 'person' }
                      cardArr={ this.state.cardArr }
                      clickOnFavorite={ this.updateFavoritesOnClick.bind(this) }/>
        </div>
      </div>
    )
  }

}

export default App;
