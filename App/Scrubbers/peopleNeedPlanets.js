const peopleNeedPlanets = (people, planets, species) => {
  let speciesNames = species
  // console.log(speciesNames)
  let planetNames = planets.map((val, index) => {
    return planets[index].Name
  })

  let planetPopulation = planets.map((val, index) => {
    return planets[index].Population
  })

  let peopleWithHomes = people.map((val, index) => {
    let worldReference = people[index].Homeworld.split('')
    let speciesReference;

    if(people[index].Species) {
      speciesReference = people[index].Species.split('')
    } else {
      speciesReference = "http://swapi.co/api/species/39/".split('')
    }

    worldReference = worldReference.slice(28, worldReference.length - 1).join('')
    speciesReference = speciesReference.slice(28, speciesReference.length - 1).join('')
    worldReference = parseInt(worldReference) - 1
    speciesReference = parseInt(speciesReference) - 1

    people[index].Species = speciesNames[speciesReference]
    people[index].Population = planetPopulation[worldReference]
    people[index].Homeworld = planetNames[worldReference]
    return people[index]
  })
  return peopleWithHomes
}

export default peopleNeedPlanets
