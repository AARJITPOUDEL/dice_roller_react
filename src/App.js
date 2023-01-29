
import { useState } from 'react';
import './index.css';

const App = ()=>{
  const [diceNumber, SetDiceNumber] = useState(2)
const refreshDice=()=>{
  const randomNumber = Math.floor(Math.random()*6 )+1
  SetDiceNumber(randomNumber)
}

  return(
    <div>
      <h3>Dice Roller</h3>
      <img height={300} width={300} src={require(`./assets/${diceNumber}.png`)} ></img>
      <br></br>
      <button onClick={()=> refreshDice()}className='button'>Roll</button>
    </div>
  )
}

export default App;
