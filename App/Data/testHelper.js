import fetchMock from 'fetch-mock'

import films from './films.json'
import planets1 from './Planets/Planets1.json'
import planets2 from './Planets/Planets2.json'
import planets3 from './Planets/Planets3.json'
import planets4 from './Planets/Planets4.json'
import planets5 from './Planets/Planets5.json'
import planets6 from './Planets/Planets6.json'
import planets7 from './Planets/Planets7.json'
import people1 from './People/People1.json'
import people2 from './People/People2.json'
import people3 from './People/People3.json'
import people4 from './People/People4.json'
import people5 from './People/People5.json'
import people6 from './People/People6.json'
import people7 from './People/People7.json'
import people8 from './People/People8.json'
import people9 from './People/People9.json'
import species1 from './Species/Species1.json'
import species2 from './Species/Species2.json'
import species3 from './Species/Species3.json'
import species4 from './Species/Species4.json'
import vehicles1 from './Vehicles/Vehicles1.json'
import vehicles2 from './Vehicles/Vehicles2.json'
import vehicles3 from './Vehicles/Vehicles3.json'
import vehicles4 from './Vehicles/Vehicles4.json'

export const filmHelper = () => {
  fetchMock.get('http://swapi.co/api/films/?page=1', { status: 200, body: films })
}

export const planetHelper = () => {
  fetchMock.get('http://swapi.co/api/planets/?page=1', { status: 200, body: planets1 });
  fetchMock.get('http://swapi.co/api/planets/?page=2', { status: 200, body: planets2 });
  fetchMock.get('http://swapi.co/api/planets/?page=3', { status: 200, body: planets3 });
  fetchMock.get('http://swapi.co/api/planets/?page=4', { status: 200, body: planets4 });
  fetchMock.get('http://swapi.co/api/planets/?page=5', { status: 200, body: planets5 });
  fetchMock.get('http://swapi.co/api/planets/?page=6', { status: 200, body: planets6 });
  fetchMock.get('http://swapi.co/api/planets/?page=7', { status: 200, body: planets7 });
}

export const peopleHelper = () => {
  fetchMock.get('http://swapi.co/api/people/?page=1', { status: 200, body: people1 });
  fetchMock.get('http://swapi.co/api/people/?page=2', { status: 200, body: people2 });
  fetchMock.get('http://swapi.co/api/people/?page=3', { status: 200, body: people3 });
  fetchMock.get('http://swapi.co/api/people/?page=4', { status: 200, body: people4 });
  fetchMock.get('http://swapi.co/api/people/?page=5', { status: 200, body: people5 });
  fetchMock.get('http://swapi.co/api/people/?page=6', { status: 200, body: people6 });
  fetchMock.get('http://swapi.co/api/people/?page=7', { status: 200, body: people7 });
  fetchMock.get('http://swapi.co/api/people/?page=8', { status: 200, body: people8 });
  fetchMock.get('http://swapi.co/api/people/?page=9', { status: 200, body: people9 });
}

export const speciesHelper = () => {
  fetchMock.get('http://swapi.co/api/species/?page=1', { status: 200, body: species1 });
  fetchMock.get('http://swapi.co/api/species/?page=2', { status: 200, body: species2 });
  fetchMock.get('http://swapi.co/api/species/?page=3', { status: 200, body: species3 });
  fetchMock.get('http://swapi.co/api/species/?page=4', { status: 200, body: species4 });
}

export const vehiclesHelper = () => {
  fetchMock.get('http://swapi.co/api/vehicles/?page=1', { status: 200, body: vehicles1 });
  fetchMock.get('http://swapi.co/api/vehicles/?page=2', { status: 200, body: vehicles2 });
  fetchMock.get('http://swapi.co/api/vehicles/?page=3', { status: 200, body: vehicles3 });
  fetchMock.get('http://swapi.co/api/vehicles/?page=4', { status: 200, body: vehicles4 });

}
