const PokemonItem = ({name, img, height, tallestHandler}) =>{
    return (
        <>
            <li>
                <div className="p-6 flex flex-col gap-4 max-h-max shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
                    <img src={img} alt="pokemon"/>
                    <p>{name}</p>
                    <button
                        onClick={() => {
                            tallestHandler(height)
                        }}
                    
                    className="border border-black hover:bg-blue-500 hover:text-white">Vote</button>
                </div>
            </li>
        </>
    )
}

export default PokemonItem