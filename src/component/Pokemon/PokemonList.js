import PokemonItem from "./PokemonItem"

const PokemonList = ({pokemons, handler}) =>{
    return (
        <>
            <ul className="flex justify-around gap-12">
                {pokemons.map((d) => {
                    return (<PokemonItem handler={handler} key={d.name} data={d} />)
                })}
            </ul>
        </>
    )
}

export default PokemonList