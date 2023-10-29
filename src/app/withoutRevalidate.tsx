import PokemonCard from "./pokemonCard";

async function getApiData() {
    /*
        👉 Sem o revalidate como argumento no fetch, nós estamos falando que o dado em questão
        não é atualizado frequentemente. 
        Por isso, ele será pré-renderizado no servidor e será entregue com uma
        performance melhor em termos de Core Web Vitals
    */

    const apiResponse = await fetch('https://pokeapi.co/api/v2/pokemon/chikorita');

    return apiResponse.json();
}

export default async function WithoutRevalidate() {
    const pokemon = await getApiData();

    return(
        <PokemonCard name={pokemon.name} image={pokemon.sprites.back_default} />
    )
}