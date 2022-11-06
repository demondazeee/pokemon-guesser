import PokemonItem from "./PokemonItem"

const PokemonList = ({pokemons, tallestHandler}) =>{
    return (
        <>
            <ul className="flex justify-around gap-12">
                {pokemons.map((d) => {
                    return (<PokemonItem tallestHandler={tallestHandler} key={d.name} height={d.height} name={d.name} img={d.img} />)
                })}
            </ul>
        </>
    )
}

export default PokemonList