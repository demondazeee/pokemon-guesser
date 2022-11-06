import { useContext } from "react"
import { dataCtx } from "../store/DataContext"
import PokemonList from "./PokemonList"

const TallestPokemon = () =>{
    const {data, correctHandler, score} = useContext(dataCtx)
   

    const tallestComponent = () =>{
        
        if(data.length > 0){
            return (
                <div className="h-[40vh] flex flex-col justify-around items-center">
                    
                    <h2 className="font-bold text-lg">Who's the Tallest Pokemon</h2>
                    <PokemonList tallestHandler={tallestHandler} pokemons={data} />
                </div>
            )
        }

        return <p>Loading</p>
    }

    const tallestHandler = (height) => {
        const ans = Math.max(data[0].height, data[1].height)
        correctHandler({
            val: ans === height ? 1 : 0
        })
    }

    // 

    return (
        <>
            <h1 className="font-bold text-lg">Score: {score}</h1>
            {tallestComponent()}
        </>
    )
}

export default TallestPokemon