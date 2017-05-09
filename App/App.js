import React, { Component } from 'react';
import Button from './Button/Button.js';
import CardList from './CardList/CardList.js';
import speciesScrubber from './Scrubbers/SpeciesScrubber';
import peopleScrubber from './Scrubbers/PeopleScrubber';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cardArr: '',
      speciesArr: [],
      peopleArr: [],
      planetsArr: [],
      vehicleArr: [],
      previous: 'previous-url',
      next: 'next-url'
    }
  }

  componentDidMount () {
    this.setState({
      speciesArr: speciesScrubber(),
      peopleArr: peopleScrubber(),
      cardArr: [
        {
          Type: 'people',
          Name: 'Luke Skywalker',
          Homeworld: 'Tatooine',
          Species: 'Human',
          Language: 'Galactic Basic',
          Population: '200000',
          Terrain: null,
          Climate: null,
          Residents: null,
          Model: null,
          Class: null,
          NumberOfPassengers: null
        },
        {
          Type: 'people',
          Name: 'Person 2',
          Homeworld: 'Ta',
          Species: 'Hum',
          Language: 'Basic',
          Population: '10000',
          Terrain: null,
          Climate: null,
          Residents: null,
          Model: null,
          Class: null,
          NumberOfPassengers: null
        }
      ]
    })
  }


  render() {
    console.log(this.state.speciesArr)
    return (
      <div id='main-container'>
        <aside id='synopsis'>story intro text</aside>
        <div id='content-container'>
          <header id='header-container'>SWAPIbox</header>
          <section id='button-container'>
            <Button />
            <Button />
          </section>
            <CardList cardArr={ this.state.cardArr }
                      type={ 'person' }/>
        </div>
      </div>
    )
  }

}



export default App;
