import React from 'react'
import mocha from 'mocha'
import fetch from 'whatwg-fetch'
import fetchMock from 'fetch-mock'
// import { shallow, mount } from 'enzyme'
import filmsScrubber from '../App/Scrubbers/filmsScrubber'
import peopleNeedPlanets from '../App/Scrubbers/peopleNeedPlanets'
import peopleScrubber from '../App/Scrubbers/peopleScrubber'
import planetScrubber from '../App/Scrubbers/planetScrubber'
import speciesOrdered from '../App/Scrubbers/speciesOrdered'
import speciesScrubber from '../App/Scrubbers/speciesScrubber'
import vehicleScrubber from '../App/Scrubbers/vehicleScrubber'
import films from '../App/Data/films.json'
// const fetch = require('node-fetch')
// fetch = jest.fn(() => new Promise(resolve => resolve()));
// var Mocha = require('mocha')

describe('Time to scrub some data', () => {

  afterEach(() => {
    fetchMock.restore()
  })

function resolveAfter2Seconds () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

  it('filmsScrubber should grab scroll text for seven films', async () => {
    fetchMock.get('http://swapi.co/api/films/?page=1', {
      status: 200,
      body: films
    })
    let filmArray = filmsScrubber();

    await resolveAfter2Seconds()
    ;
    filmArray.then((array) => {
      expect(array.length).toEqual(7);
    })

  })
})
