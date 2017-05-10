const planetsNeedPeople = (planets, people) => {
  let updatedPlanets = Object.assign({}, planets)
  people.map((person, index) => {
    updatedPlanets[person.PlanetUrl]
      .Residents[updatedPlanets[person.PlanetUrl].Residents.length] = person.Name
  })
  return updatedPlanets
}


export default planetsNeedPeople
