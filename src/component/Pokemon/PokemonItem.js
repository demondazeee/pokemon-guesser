import { useContext, useState } from "react"
import { dataCtx } from "../../store/DataContext"

const PokemonItem = ({handler, data}) =>{
    const {mode} = useContext(dataCtx)
    const [load, isLoaded] = useState(false)
    console.log(load)
    const style = load ? "h-40" : {visibility: 'hidden'};
    // const style = didLoad ? {} : {visibility: 'hidden'};
    return (
        
        <>
            <li>
                <div className="p-6 flex flex-col gap-4 max-h-full shadow-[0px_5px_15px_rgba(0,0,0,0.35)] bg-gray-500 text-white">
                    {!load && <span className="loader"></span>}
                    <img className={style} src={data.img} onLoad={() => isLoaded(true)} alt="pokemon"/>
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