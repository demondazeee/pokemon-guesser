import { useContext } from "react";
import HeaviestPokemon from "./component/Guess/HeaviestPokemon";
import TallestPokemon from "./component/Guess/TallestPokemon";
import { dataCtx } from "./store/DataContext";





function App() {
  // const [guess, setGuess] = useState('')

  // const guessHandler = (mode) => {
  //   setGuess(mode)
  // }
  
  const {mode, modeHandler} = useContext(dataCtx)
  return (
    <>
      <main className="mx-auto py-6 max-w-2xl">
        <nav>
          <ul className="flex gap-2">
            <li><button href="#" onClick={modeHandler.bind(this,'tallest')}>Tallest Pokemon</button></li>
            <li><button href="#" onClick={modeHandler.bind(this, 'heaviest')}>Heaviest Pokemon</button></li>
          </ul>
        </nav>
        {mode === 'tallest' && <TallestPokemon />}
        {mode === 'heaviest' && <HeaviestPokemon />}
      </main>
    </>
  );
}

export default App;
