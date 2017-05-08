import React, { Component } from 'react';
import Button from './Button/Button.js';
import Card from './Card/Card.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      peopleArr: [{name: 'luke', Homeworld: 'Tatooine'}],
      planetsArr: [],
      vehiclesArr: []
    }
  }

  render() {
    return (
      <div id='main-container'>
        <aside id='synopsis'>story intro text</aside>
        <div id='content-container'>
          <header id='header-container'>SWAPIbox</header>
          <section id='button-container'>
            <Button />
            <Button />
          </section>
          <section id='card-container'>
            <Card cardArr={ this.state.peopleArr }/>
          </section>
        </div>
      </div>
    )
  }

}



export default App;
