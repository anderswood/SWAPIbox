import React, { Component } from 'react';
import asideTextArr from './Aside/aside.js';
import Button from './Button/Button.js';
import CardList from './CardList/CardList.js';
import Favorites from './Favorites/favorites.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cardArr: '',
      peopleArr: [],
      previous: 'previous-url',
      next: 'next-url'
    }
  }

  componentDidMount () {
    this.setState({
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
    // let asideText = "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....";
    return (
      <div id='main-container'>
          <div id='aside-container'>
            <aside id='synopsis-title'>
              <div id='synopsis'>{ asideTextArr }</div>
            </aside>
          </div>
        <div id='content-container'>
          <header id='header-container'>
            <h1>SWAPI-box</h1>
            <Favorites />
          </header>
          <section id='button-container'>
            <Button type={ 'people' }/>
            <Button type={ 'planets' }/>
            <Button type={ 'vehicles' }/>
          </section>
            <CardList cardArr={ this.state.cardArr }
                      type={ 'person' }/>
        </div>
      </div>
    )
  }

}


export default App;
