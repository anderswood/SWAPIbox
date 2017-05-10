const deletePeopleURL = (people) => {
  let updatedPeople = people.map((person, index) => {
    delete person.PlanetUrl
    return person
  })
  console.log('update those folks', updatedPeople)
  return updatedPeople
}

export default deletePeopleURL
