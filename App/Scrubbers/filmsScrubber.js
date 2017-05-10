
const filmsScrubber = () => {
  let p1 = apiCall('http://swapi.co/api/films/?page=1')


  return Promise.all([p1]).then(promiseArr => {
    return promiseArr.reduce((acc, filmsSynopsis) => {
      filmsSynopsis.results.forEach((films, index) => {
        acc[acc.length] = films.opening_crawl;
      })
      return acc
    }, [])
  })
}

const apiCall = (address) => {
  return fetch(address).then(response => response.json())
}


export default filmsScrubber
