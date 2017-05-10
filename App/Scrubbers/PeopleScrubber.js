
const peopleScrubber = () => {
  let p1 = apiCall('http://swapi.co/api/people/?page=1')
  let p2 = apiCall('http://swapi.co/api/people/?page=2')
  let p3 = apiCall('http://swapi.co/api/people/?page=3')
  let p4 = apiCall('http://swapi.co/api/people/?page=4')
  let p5 = apiCall('http://swapi.co/api/people/?page=5')
  let p6 = apiCall('http://swapi.co/api/people/?page=6')
  let p7 = apiCall('http://swapi.co/api/people/?page=7')
  let p8 = apiCall('http://swapi.co/api/people/?page=8')
  let p9 = apiCall('http://swapi.co/api/people/?page=9')

  return Promise.all([p1, p2, p3, p4, p5, p6, p7, p8, p9]).then(promiseArr => {
    return promiseArr.reduce((acc, peopleSynopsis) => {
      peopleSynopsis.results.forEach((people, index) => {
        let tempObj = {Name:''};
        tempObj.Name = people.name;
        tempObj.Homeworld = people.homeworld;
        tempObj.Species = people.species[0];
        tempObj.Population = '';
        acc[acc.length] = tempObj
      })
      return acc
    }, [])
  })
}

const apiCall = (address) => {
  return fetch(address).then(response => response.json())
}


export default peopleScrubber
