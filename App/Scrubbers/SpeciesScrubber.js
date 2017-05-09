const speciesScrubber = () => {
  let p1 = apiCall('http://swapi.co/api/species/?page=1')
  let p2 = apiCall('http://swapi.co/api/species/?page=2')
  let p3 = apiCall('http://swapi.co/api/species/?page=3')
  let p4 = apiCall('http://swapi.co/api/species/?page=4')

  Promise.all([p1, p2, p3, p4]).then(obj => {
    return obj.reduce((acc, speciesSynopsis) => {
      speciesSynopsis.results.forEach((species, index) => {
        acc[acc.length] = species.name
      })
      return acc
    }, [])
  }).then((listOfSpecies) => {
    console.log(listOfSpecies)
    return listOfSpecies
  })
}

const apiCall = (address) => {
  return fetch(address).then((r) => r.json())
}


export default speciesScrubber
