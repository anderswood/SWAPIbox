import React from 'react'
import mocha from 'mocha'
// import { shallow, mount } from 'enzyme'
// import filmsScrubber from './filmsScrubber'
// import peopleNeedPlanets from './peopleNeedPlanets'
// import peopleScrubber from './peopleScrubber'
// import planetScrubber from './planetScrubber'
// import speciesOrdered from './speciesOrdered'
// import speciesScrubber from './speciesScrubber'
// import vehicleScrubber from './vehicleScrubber'
import filmsScrubber from '../App/Scrubbers/filmsScrubber'
// fetch = jest.fn(() => new Promise(resolve => resolve()));
// var Mocha = require('mocha')

describe('Time to scrub some data', () => {

  it('filmsScrubber should grab scroll text for seven films', () => {
    let filmArray = filmsScrubber()
    console.log(filmArray)
    expect(filmArray.length).toEqual(7)
  })
})
