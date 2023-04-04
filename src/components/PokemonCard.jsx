import React from "react";




function PokemonCard(props) {

  console.log(props)

  return (

    <figure>
      {
      props.pokemon.imgSrc ? <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      alt=""
    /> : "..."  

      }
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  );

};

export default PokemonCard;