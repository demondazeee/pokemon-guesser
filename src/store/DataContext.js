import { createContext, useEffect, useReducer, useState } from "react"

export const dataCtx = createContext({
    mode: '',
    modeHandler: () => {},
    data: [],
    correctHandler: () => {},
    score: 0
})

const reducerAns = (prev, action) =>{
    if(action.val === 1){
        return { 
            val: prev.val+=1,
            counter: prev.counter+=1
        }
    }
    if(action.val === 0){
        return { 
            val: 0,
            counter: prev.counter+=1
        }
    }
    return {
        val: 0,
        counter: 0
    }
}

const DataContext = ({children}) =>{
    const [data, setData] = useState([])
    const [mode, setMode] = useState('')
    const [correctAns, dispatchFn] = useReducer(reducerAns, {
        val: 0,
        counter: 0
    })

    const loadData = async () => {
        const poke1 = Math.floor((Math.random() + 1) * 400)
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke1}`)
        const {name, height, weight, sprites: {front_default}} = await res.json()

        const poke2 = Math.floor((Math.random() + 1) * 400)
        const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke2}`)
        const {name: name2, height: height2, weight: weight2, sprites: {front_default: front_default_2}} = await res2.json()

        setData([{name, height, weight, img: front_default}, {name:name2, height:height2, weight: weight2, img: front_default_2}])
    }

    const modeHandler = (mode) => {
        setMode(mode)
        dispatchFn({})
    }

    useEffect(() => {
        loadData()
    }, [correctAns.val, correctAns.counter])

    return (
        <dataCtx.Provider value={{
            data,
            correctHandler: dispatchFn,
            score: correctAns.val,
            mode,
            modeHandler
        }}>
            {children}
        </dataCtx.Provider>
    )
}


export default DataContext