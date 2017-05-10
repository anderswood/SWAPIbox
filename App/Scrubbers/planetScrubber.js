const planetScrubber = () => {
  let p1 = apiCall('http://swapi.co/api/planets/?page=1')
  let p2 = apiCall('http://swapi.co/api/planets/?page=2')
  let p3 = apiCall('http://swapi.co/api/planets/?page=3')
  let p4 = apiCall('http://swapi.co/api/planets/?page=4')
  let p5 = apiCall('http://swapi.co/api/planets/?page=5')
  let p6 = apiCall('http://swapi.co/api/planets/?page=6')
  let p7 = apiCall('http://swapi.co/api/planets/?page=7')

  return Promise.all([p1, p2, p3, p4, p5, p6 ,p7]).then(promiseArr => {
    return promiseArr.reduce((acc, planetsSynopsis) => {
      planetsSynopsis.results.forEach((planet, index) => {
        // console.log(planet.name);
        let tempObj = {Name:''};
        tempObj.Name = planet.name;
        tempObj.Terrain = planet.terrain;
        tempObj.Population = planet.population;
        tempObj.Climate = planet.climate;
        tempObj.Residents = planet.residents;
        acc[acc.length] = tempObj
      })
      return acc
    }, [Tatooine])
  })
}

const Tatooine = {
    Name: "Tatooine",
    Terrain: "desert",
    Population: "200000",
    Climate: "arid",
    Residents: [
        "http://swapi.co/api/people/1/",
        "http://swapi.co/api/people/2/",
        "http://swapi.co/api/people/4/",
        "http://swapi.co/api/people/6/",
        "http://swapi.co/api/people/7/",
        "http://swapi.co/api/people/8/",
        "http://swapi.co/api/people/9/",
        "http://swapi.co/api/people/11/",
        "http://swapi.co/api/people/43/",
        "http://swapi.co/api/people/62/"
    ]
  }


const apiCall = (address) => {
  return fetch(address).then(response => response.json())
}


export default planetScrubber
