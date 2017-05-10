import React, { Component } from 'react';
// import asideTextArr from './Aside/aside.js';
import Button from './Button/Button.js';
import CardList from './CardList/CardList.js';
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
      film: 'film text',
      species: [],
      people: [],
      planet: [],
      vehicle: [],
      favorites: [],
    }
  }

  componentDidMount () {
    let species;
    let planets;
    let vehicles;
    let people;

    filmsScrubber().then(filmArr => {
      // console.log(filmArr);
      let filmSelector = Math.floor(Math.random() * (7 - 0)) + 0
      this.setState({film: filmArr[filmSelector]})
    })

    vehicleScrubber().then(vehicleScrubbedArr => {
      this.setState({vehicle: vehicleScrubbedArr})
    })

    speciesScrubber()
      .then( speciesScrubbedArr => {
        species = speciesOrdered(speciesScrubbedArr)
        planetScrubber()
          .then( planetScrubbedArr => {
            peopleScrubber().then(peopleScrubbedArr => {
              people = peopleNeedPlanets(peopleScrubbedArr, planetScrubbedArr, species)
              planets = planetsNeedPeople(planetScrubbedArr, people)
              this.setState({species: species,
                             planet: planets,
                             people: people
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
            <Favorites updateCards={ this.updateCardsOnClick.bind(this) }/>
          </section>
            <CardList cardArr={ this.state.cardArr }
                      type={ 'person' }/>
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
