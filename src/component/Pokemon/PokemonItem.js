import { useContext } from "react"
import { dataCtx } from "../../store/DataContext"

const PokemonItem = ({handler, data}) =>{
    const {mode} = useContext(dataCtx)


    return (
        
        <>
            <li>
                <div className="p-6 flex flex-col gap-4 max-h-full shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
                    <img className="h-40" src={data.img} alt="pokemon"/>
                    <p>{data.name}</p>
                    { mode === 'tallest' && <button onClick={handler.bind(this, data.height)} 
                    className="border border-black hover:bg-blue-500 hover:text-white"
                    >Vote</button>}
                    { mode === 'heaviest' && <button onClick={handler.bind(this, data.weight)} 
                    className="border border-black hover:bg-blue-500 hover:text-white"
                    >Vote</button>}
                </div>
            </li>
        </>
    )
}

export default PokemonItem