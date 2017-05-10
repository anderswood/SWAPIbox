
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
        console.log(planet.name);
        let tempObj = {Name:''};
        tempObj.Name = planet.name;
        tempObj.Terrain = planet.terrain;
        tempObj.Population = planet.population;
        tempObj.Climate = planet.climate;
        tempObj.Residents = planet.residents;
        acc[acc.length] = tempObj
      })
      return acc
    }, [])
  })
}

const apiCall = (address) => {
  return fetch(address).then(response => response.json())
}


export default planetScrubber
