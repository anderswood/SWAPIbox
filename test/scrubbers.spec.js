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
import planetsNeedPeople from '../App/Scrubbers/planetsNeedPeople'
import deletePeopleURL from '../App/Scrubbers/deletePeopleURL'
import { filmHelper, planetHelper, peopleHelper, speciesHelper, vehiclesHelper } from '../App/Data/testHelper'


//stubbed data
import cleanedVehicles from '../App/Data/Vehicles/CleanedVehicles'
import halfCleanedSpecies from '../App/Data/Species/HalfCleanedSpecies'
import cleanedSpecies from '../App/Data/Species/cleanedSpecies'
import halfCleanedPeople from '../App/Data/People/HalfCleanedPeople'
import halfCleanedPlanets from '../App/Data/Planets/HalfCleanedPlanets'
import mostlyCleanedPeople from '../App/Data/People/MostlyCleanedPeople'
import cleanedPeople from '../App/Data/People/cleanedPeople'

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

  it('1. filmsScrubber should grab scroll text for seven films', async () => {
    filmHelper()
    let filmArray = await filmsScrubber();

    expect(filmArray.length).toEqual(7);

  })

  it('2. planetScrubber make 7 api calls and return an array of length 62', async () => {
    planetHelper()
    let planetArray = await planetScrubber();

    expect(planetArray.length).toEqual(62);
  })

  it('3. peopleScrubber makes 9 api calls and return an array of length', async () => {
    peopleHelper()
    let peopleArray = await peopleScrubber();

    expect(peopleArray.length).toEqual(87);
  })

  it('4. speciesScrubber makes 4 api calls and return an array of length', async () => {
    speciesHelper()
    let speciesArray = await speciesScrubber();

    expect(speciesArray.length).toEqual(37);
  })

  it('5. vehicleScrubber makes 4 api calls and return an array of length', async () => {
    vehiclesHelper()
    let vehicleArray = await vehicleScrubber();

    expect(vehicleArray.length).toEqual(39);
  })

  it('6. speciesOrdered corrects the reference order of the species', () => {
    expect(halfCleanedSpecies[0].species).not.toEqual("Human")
    expect(halfCleanedSpecies[1].species).not.toEqual("Droid")

    const speciesCorrect = speciesOrdered(halfCleanedSpecies)

    expect(speciesCorrect[0]).toEqual("Human")
    expect(speciesCorrect[1]).toEqual("Droid")
  })

  it('7. peopleNeedPlanets adds the appropriate planet and species to each person', () => {
    expect(halfCleanedPeople[0].Species).toEqual('http://swapi.co/api/species/1/')
    expect(halfCleanedPeople[0].Homeworld).toEqual('http://swapi.co/api/planets/1/')
    expect(halfCleanedPeople[1].Species).toEqual('http://swapi.co/api/species/2/')
    expect(halfCleanedPeople[1].Homeworld).toEqual('http://swapi.co/api/planets/1/')

    const peopleMostlyCorrect = peopleNeedPlanets(halfCleanedPeople, halfCleanedPlanets, cleanedSpecies)

    expect(peopleMostlyCorrect[0].Species).toEqual('Human')
    expect(peopleMostlyCorrect[0].Homeworld).toEqual('Tatooine')
    expect(peopleMostlyCorrect[1].Species).toEqual('Droid')
    expect(peopleMostlyCorrect[1].Homeworld).toEqual('Tatooine')
  })

  it('8. planetsNeedPeople gives planets the population they so desperately want', () => {
    expect(halfCleanedPlanets[0].Residents.length).toEqual(0)
    expect(halfCleanedPlanets[1].Residents.length).toEqual(0)

    let cleanedPlanets = planetsNeedPeople(halfCleanedPlanets, mostlyCleanedPeople)

    expect(halfCleanedPlanets[0].Residents.length).toEqual(10)
    expect(halfCleanedPlanets[1].Residents.length).toEqual(3)
  })

  it('9. deletePeopleURL applies the correct planet to the individuals object', () => {

    expect(mostlyCleanedPeople[0].PlanetUrl).toEqual(0)
    expect(mostlyCleanedPeople[1].PlanetUrl).toEqual(0)

    let deletedURL = deletePeopleURL(mostlyCleanedPeople)

    expect(deletedURL[0].PlanetUrl).toEqual(undefined)
    expect(deletedURL[1].PlanetUrl).toEqual(undefined)
  })
})
