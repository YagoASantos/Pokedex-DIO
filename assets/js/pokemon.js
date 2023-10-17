const nome = document.querySelector(".name");
const content = document.querySelector(".content");
const image = document.getElementById("image");
const types = document.querySelector(".types");
const abilities = document.querySelector(".abilities");

function getPokemonIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get("id"));
    return urlParams.get("id");
}


pokeApi.getPokemon(getPokemonIdFromURL())
  .then((pokemon) => {
    nome.textContent = pokemon.name;
    content.className += ` ${pokemon.type}`;
    image.src = pokemon.photo;
    pokemon.types.forEach(type => {
      const li = document.createElement("li");
      li.textContent = type;
      li.className = type;
      types.appendChild(li);
    })
    pokemon.abilities.forEach(ability => {
      const li = document.createElement("li");
      li.textContent = ability;
      abilities.appendChild(li);
    })
  })
  .catch((error) => {
    // Lida com erros, caso ocorram
    alert("Erro ao buscar os dados do Pokémon:", error);
});



