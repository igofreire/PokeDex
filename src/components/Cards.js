import React from 'react';

function Cards() {
    var pokemosNuber = 50;
    const getPokemon = async (id) => {
        const url = "https://pokeapi.co/api/v2/pokemon/" + id;
        const res = await fetch(url);
        const pokemon = await res.json()
        createPokemonCard(pokemon);
    }

    const fetchPokemon = async (n) => {
        for(let i = n; i <= pokemosNuber; i++)
        await getPokemon(i);
    }
    
    function createPokemonCard(pokemon) {
        const pokemonEl = document.createElement("div");
        pokemonEl.classList.add("pokemon-container")
        pokemonEl.classList.add("col-sm-4")
        var itensCard = `<P class="pokemonId">#${pokemon.id}</p>`
        itensCard += `<div class="img-container"><img class="img-pokemon" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"></div>`;
        var pokeInfor = `<div class="abilidades"><p>Abilidade: ${pokemon.abilities[0].ability.name}</p>`;
        pokeInfor += `<p>Altura: ${pokemon.height  / 10} m</p>`;
        pokeInfor += `<p>Peso: ${pokemon.weight / 10} Kg</p></div>`;
        pokeInfor += `<div class="infor-title"><p>Informações</p></div>`;
        itensCard += `<p class="name">${pokemon.name}</p>`;
        var pokeInnerHTML =`<div class="pokemon" id="${pokemon.id}">${itensCard}</div>`;
        pokeInnerHTML += `<div class="poke-infor" id="${pokemon.name}" style="display: none">${pokeInfor}</div>`;
        pokemonEl.innerHTML = pokeInnerHTML;
        setTimeout(()=>{
            const pokeContainer = document.getElementById("pokemon-cards")
            pokeContainer.appendChild(pokemonEl)
        },1000)
    }
    
    fetchPokemon(1)
    return (
        <div className="pokemon-cards row" id="pokemon-cards">
            
        </div>
    );
}

export default Cards;