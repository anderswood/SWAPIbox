const speciesScrubber = () => {
  let p1 = apiCall('http://swapi.co/api/species/?page=1')
  let p2 = apiCall('http://swapi.co/api/species/?page=2')
  let p3 = apiCall('http://swapi.co/api/species/?page=3')
  let p4 = apiCall('http://swapi.co/api/species/?page=4')

  let intial = []

  return Promise.all([p1, p2, p3, p4]).then(promiseArr => {
    return promiseArr.reduce((acc, speciesSynopsis) => {
      speciesSynopsis.results.forEach((species, index) => {
        let speciesReference;
        if(species.url) {
          speciesReference = species.url.split('')
        } else {
          speciesReference = "http://swapi.co/api/species/39/".split('')
        }
        speciesReference = speciesReference.slice(28, speciesReference.length - 1).join('')
        speciesReference = parseInt(speciesReference)
        acc[acc.length] = {order: parseInt(speciesReference), species: species.name}
      })

      return acc
    }, [])
  })
}

const apiCall = (address) => {
  return fetch(address).then(response => response.json())
}


export default speciesScrubber
