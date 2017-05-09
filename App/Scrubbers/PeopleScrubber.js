const peopleScrubber = (query) => {
  let unclean = query;
  let clean = { people: [], next: '', previous: '' }

  // console.log(unclean.results[0].name)
  // console.log(clean)
  let array = unclean.results.map((val, index) => {
    let temp = {}
    temp.name = unclean.results[index].name;
    temp.homeworld = unclean.results[index].homeworld;
    temp.species = unclean.results[index].species[0];
    temp.population = unclean.results[index].homeworld;
    return temp
  })
  clean.people.push(...array)
  clean.next = query.previous
  clean.previous = query.next
  return clean
}

export default peopleScrubber

// let array = unclean.results.map((val, index) => {
//   let temp = {}
//   temp.name = unclean.results[index].name;
//   temp.homeworld = unclean.results[index].homeworld;
//   temp.species = unclean.results[index].species[0];
//   temp.population = unclean.results[index].homeworld;
//   return temp
// })
// clean.people.push(...array)
// clean.next = query.previous
// clean.previous = query.next
// return clean
