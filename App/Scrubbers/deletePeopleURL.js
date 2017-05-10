const deletePeopleURL = (people) => {
  let updatedPeople = people.map((person, index) => {
    delete person.PlanetUrl
    return person
  })
  return updatedPeople
}

export default deletePeopleURL
