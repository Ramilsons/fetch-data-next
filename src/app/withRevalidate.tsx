import PokemonCard from "./pokemonCard";

async function getApiData() {
    /*
        👉 Com o revalidate estamos falamos para o next que o dado em questão, que é chamado
            da API muda com certa frequência, portanto passamos o tempo que ocorre
            essa mudança do dado para ele ficar ciente e atualizar no server com os novos dados
            e não mais o antigo
    */

    const apiResponse = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
        next: {
            revalidate: 60 // Irá revalidar / atualizar os dados a cada 60 segundo
        }  
    });

    return apiResponse.json();
}

export default async function WithRevalidate() {
    const pokemon = await getApiData();

    return (
        <PokemonCard name={pokemon.name} image={pokemon.sprites.back_default} />
    )
}