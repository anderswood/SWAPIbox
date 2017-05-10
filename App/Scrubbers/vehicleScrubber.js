
const vehicleScrubber = () => {
  let p1 = apiCall('http://swapi.co/api/vehicles/?page=1')
  let p2 = apiCall('http://swapi.co/api/vehicles/?page=2')
  let p3 = apiCall('http://swapi.co/api/vehicles/?page=3')
  let p4 = apiCall('http://swapi.co/api/vehicles/?page=4')

  return Promise.all([p1, p2, p3, p4]).then(promiseArr => {
    return promiseArr.reduce((acc, vehiclesSynopsis) => {
      vehiclesSynopsis.results.forEach((vehicle, index) => {
        let tempObj = {Name:''};
        tempObj.Name = vehicle.name;
        tempObj.Model = vehicle.model;
        tempObj.Class = vehicle.vehicle_class;
        tempObj.Passengers = vehicle.passengers;
        acc[acc.length] = tempObj
      })
      return acc
    }, [])
  })
}

const apiCall = (address) => {
  return fetch(address).then(response => response.json())
}


export default vehicleScrubber
