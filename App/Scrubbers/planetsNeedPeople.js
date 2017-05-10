const planetsNeedPeople = (planets, people) => {
  let peopleArr = people.map((person, index) => {
    return person.Name
  })
  let updatedPlanets = Object.assign({}, planets)

  planets.forEach((planet, index) => {
    planet.Residents.forEach((resident, indy) => {
      let peopleReference;
      if(!resident) {
        updatedPlanets[index].Residents[indy] = "None"
      }
      let cutUp = resident
      peopleReference = cutUp.split('').slice(27, cutUp.length - 1).join('')
      peopleReference = parseInt(peopleReference) -1
      updatedPlanets[index].Residents[indy] = peopleArr[peopleReference]
    })
  })
  return updatedPlanets
}


export default planetsNeedPeople
