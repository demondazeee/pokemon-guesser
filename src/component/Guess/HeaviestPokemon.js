import { useContext } from "react"
import { dataCtx } from "../../store/DataContext"
import PokemonList from "../Pokemon/PokemonList"

const HeaviestPokemon = () =>{
    const {data, correctHandler, score} = useContext(dataCtx)

    const heaviestHandler = (weight) => {
        const ans = Math.max(data[0].weight, data[1].weight)
        correctHandler({
            val: ans === weight ? 1 : 0
        })
    }

    const heaviestComponent = () =>{
        
        if(data.length > 0){
            return (
                <div className="h-[40vh] flex flex-col justify-around items-center">
                    
                    <h2 className="font-bold text-lg">Who's the Heaviest Pokemon</h2>
                    <PokemonList handler={heaviestHandler} pokemons={data} />
                </div>
            )
        }

    }


    return (
        <>
            <h1 className="font-bold text-lg">Score: {score}</h1>
            {heaviestComponent()}
        </>
    )
}

export default HeaviestPokemon