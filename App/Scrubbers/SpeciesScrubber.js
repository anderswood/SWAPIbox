const speciesScrubber = () => {
  let clean = {}
  // let tempCleaner = recursiveCall('http://swapi.co/api/species/')
  let p1 = new Promise(function(resolve, reject) {
    resolve(recursiveCall('http://swapi.co/api/species/?page=1'))
  })
  let p2 = new Promise(function(resolve, reject) {
    resolve(recursiveCall('http://swapi.co/api/species/?page=2'))
  })
  let p3 = new Promise(function(resolve, reject) {
    resolve(recursiveCall('http://swapi.co/api/species/?page=3'))
  })
  let p4 = new Promise(function(resolve, reject) {
    resolve(recursiveCall('http://swapi.co/api/species/?page=4'))
  })

  let total = []
  Promise.all([p1, p2, p3, p4]).then(values => {
    total.push(values)
    console.log(values, 'values')
    return total
  })
}


const recursiveCall = (address) => {
  fetch(address)
  .then(response => {
    if(response.ok) {
       const contentType = response.headers.get('Content-Type') || '';
      if (contentType.includes('application/json')) {
        console.log(response)
        return response
      }
    }
  })
}
// const recursiveCall = (address) => {
//   let tempObj = []
//   fetch(address)
//     .then((response) => response.json()
//     .then(function(data) {
//       if(data) {
//         let tempData = data.results
//         Object.keys(tempData).forEach((val, index) => {
//           tempObj.push(data.results[index].name)
//         })
//       }
//   }))
//   return tempObj

export default speciesScrubber
