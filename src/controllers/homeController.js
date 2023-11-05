const pokemons = require('../pokemons.json');

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const index = async (req, res) => {
  const pokemon = getRandomElement(pokemons);
  const viewData = {
    id : pokemon.Id,
    name : pokemon.Nombre,
    height : pokemon.Altura,
    ability : pokemon.Habilidad,
    image : pokemon.Imagen,
    frase : pokemon['Frase filosófica']
  }

  res.render('home', viewData);
}

const all = async (req, res) => {
  const pokemon = getRandomElement(pokemons);
  const viewData = {
    id : pokemon.Id,
    name : pokemon.Nombre,
    height : pokemon.Altura,
    ability : pokemon.Habilidad,
    image : pokemon.Imagen,
    frase : pokemon['Frase filosófica']
  }

  res.send(viewData);
}

module.exports = {
  index,
  all
}
