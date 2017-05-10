const planetsNeedPeople = (planets, people) => {
  let updatedPlanets = planets
  
  people.forEach((person, index) => {
    updatedPlanets[person.PlanetUrl].Residents
      [updatedPlanets[person.PlanetUrl].Residents.length] = person.Name
  })
  return updatedPlanets
}


export default planetsNeedPeople
