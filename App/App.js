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
              // console.log('people', this.state.peopleArr)
              // console.log('planets', this.state.planetsArr)
              // console.log('species', this.state.speciesArr)
                // console.log('vehicle', this.state.vehicleArr)
              console.log('APIs are dunzo');
            })
          } )
      } )

  }

  updateCardsOnClick(category) {
    this.setState({
      cardArr: this.state[category]
    })
    console.log('category: ', category);
  }

  updateFavoritesOnClick(cardToFavorite) {
    let favoriteArr = this.state.favorites
    let counter = 0
    let newFavorites = favoriteArr.map((val, index) => {
      console.log('val', val.Name, 'card', cardToFavorite.Name)
      if(val.Name != cardToFavorite.Name) {
        return val
      } else {
        counter++
      }
    })
    if(counter != 0) {
      newFavorites.push(cardToFavorite)
    }
    console.log(newFavorites)
    // favoriteArr.push(cardToFavorite)
    this.setState({
      favorites: newFavorites
    })
  }

  render() {
    console.log('cardArr: ', this.state.cardArr);
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
                        updateCards={ this.updateCardsOnClick.bind(this) }/>
          </section>
            <CardList type={ 'person' }
                      cardArr={ this.state.cardArr }
                      clickOnFavorite={ this.updateFavoritesOnClick.bind(this) }/>
        </div>
      </div>
    )
  }

}

// run this helper function after wrapper mount:

// function resolveAfter2Seconds () {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, 2000);
//   });
//   }

// execute like this: await resolveAfter2Seconds()

export default App;
