const speciesOrdered = (species) => {
  let speciesList = species
  let ordered = [];
  speciesList.forEach((val, index) => {
    ordered[val.order - 1] = val.species
  })
  ordered[ordered.length-1] = 'Unknown'
  return ordered
}

export default speciesOrdered
