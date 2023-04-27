const pokeData = [
    {
        name:"Bulbassauro",
        image: "/img/bulbasaur.png",
        description: "Pokemon",
    },
    {
        name:"Ivyssauro",
        image: "/img/ivysaur.png",
        description: "Pokemon",
    },
    {
        name:"Venossauro",
        image: "/img/venosaur.png",
        description: "Pokemon",
    }
];

let currentIndex = 0;
function updatePoke(index) {
    document.getElementById("poke-name").textContent = pokeData[index].name;
    document.getElementById("poke-image").src = pokeData[index].image;
    document.getElementById("poke-description").textContent = pokeData[index].description;
}

  document.getElementById("prev").addEventListener("click", () => {
      currentIndex--;
      if (currentIndex < 0) {
          currentIndex = pokeData.length - 1;
      }
      updatePoke(currentIndex);
  });

  document.getElementById("next").addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= pokeData.length) {
        currentIndex = 0;
    }
    updatePoke(currentIndex);
});

updatePoke(currentIndex);