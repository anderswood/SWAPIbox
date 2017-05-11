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

//stubbed data
import films from '../App/Data/films.json'
import planets1 from '../App/Data/Planets/Planets1.json'
import planets2 from '../App/Data/Planets/Planets2.json'
import planets3 from '../App/Data/Planets/Planets3.json'
import planets4 from '../App/Data/Planets/Planets4.json'
import planets5 from '../App/Data/Planets/Planets5.json'
import planets6 from '../App/Data/Planets/Planets6.json'
import planets7 from '../App/Data/Planets/Planets7.json'
import people1 from '../App/Data/People/People1.json'
import people2 from '../App/Data/People/People2.json'
import people3 from '../App/Data/People/People3.json'
import people4 from '../App/Data/People/People4.json'
import people5 from '../App/Data/People/People5.json'
import people6 from '../App/Data/People/People6.json'
import people7 from '../App/Data/People/People7.json'
import people8 from '../App/Data/People/People8.json'
import people9 from '../App/Data/People/People9.json'
import species1 from '../App/Data/Species/Species1.json'
import species2 from '../App/Data/Species/Species2.json'
import species3 from '../App/Data/Species/Species3.json'
import species4 from '../App/Data/Species/Species4.json'
import vehicles1 from '../App/Data/Vehicles/Vehicles1.json'
import vehicles2 from '../App/Data/Vehicles/Vehicles2.json'
import vehicles3 from '../App/Data/Vehicles/Vehicles3.json'
import vehicles4 from '../App/Data/Vehicles/Vehicles4.json'


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

    await resolveAfter2Seconds();
    filmArray.then((array) => {
      expect(array.length).toEqual(7);
    })

  })

  it('planetScrubber make 7 api calls and return an array of length 67', async () => {
    fetchMock.get('http://swapi.co/api/films/?page=1', { status: 200, body: planets1 });
    fetchMock.get('http://swapi.co/api/films/?page=2', { status: 200, body: planets2 });
    fetchMock.get('http://swapi.co/api/films/?page=3', { status: 200, body: planets3 });
    fetchMock.get('http://swapi.co/api/films/?page=4', { status: 200, body: planets4 });
    fetchMock.get('http://swapi.co/api/films/?page=5', { status: 200, body: planets5 });
    fetchMock.get('http://swapi.co/api/films/?page=6', { status: 200, body: planets6 });
    fetchMock.get('http://swapi.co/api/films/?page=7', { status: 200, body: planets7 });

    let planetArray = planetScrubber();

    await resolveAfter2Seconds();
    planetArray.then((array) => {
      expect(array.length).toEqual(67);
    })
  })

  it('peopleScrubber makes 9 api calls and return an array of length', async () => {
    fetchMock.get('http://swapi.co/api/people/?page=1', { status: 200, body: people1 });
    fetchMock.get('http://swapi.co/api/people/?page=2', { status: 200, body: people2 });
    fetchMock.get('http://swapi.co/api/people/?page=3', { status: 200, body: people3 });
    fetchMock.get('http://swapi.co/api/people/?page=4', { status: 200, body: people4 });
    fetchMock.get('http://swapi.co/api/people/?page=5', { status: 200, body: people5 });
    fetchMock.get('http://swapi.co/api/people/?page=6', { status: 200, body: people6 });
    fetchMock.get('http://swapi.co/api/people/?page=7', { status: 200, body: people7 });
    fetchMock.get('http://swapi.co/api/people/?page=8', { status: 200, body: people8 });
    fetchMock.get('http://swapi.co/api/people/?page=9', { status: 200, body: people9 });

    let peopleArray = peopleScrubber();

    await resolveAfter2Seconds();
    peopleArray.then((array) => {
      expect(array.length).toEqual(42);
    })
  })

  it('speciesScrubber makes 9 api calls and return an array of length', async () => {
    fetchMock.get('http://swapi.co/api/species/?page=1', { status: 200, body: species1 });
    fetchMock.get('http://swapi.co/api/species/?page=2', { status: 200, body: species2 });
    fetchMock.get('http://swapi.co/api/species/?page=3', { status: 200, body: species3 });
    fetchMock.get('http://swapi.co/api/species/?page=4', { status: 200, body: species4 });

    let speciesArray = speciesScrubber();

    await resolveAfter2Seconds();
    speciesArray.then((array) => {
      expect(array.length).toEqual(42);
    })
  })

  it('vehicleScrubber makes 9 api calls and return an array of length', async () => {
    fetchMock.get('http://swapi.co/api/vehicles/?page=1', { status: 200, body: vehicles1 });
    fetchMock.get('http://swapi.co/api/vehicles/?page=2', { status: 200, body: vehicles2 });
    fetchMock.get('http://swapi.co/api/vehicles/?page=3', { status: 200, body: vehicles3 });
    fetchMock.get('http://swapi.co/api/vehicles/?page=4', { status: 200, body: vehicles4 });

    let vehicleArray = vehicleScrubber();

    await resolveAfter2Seconds();
    vehicleArray.then((array) => {
      expect(array.length).toEqual(42);
    })
  })


})
