import { useState } from 'react'
import './App.css'
import words from "./wordlist.json"
import { HangmanDrawing } from './hangmandrawing'
import { HangmanLetter } from './hangmanLetter'
import { Keyboard } from './keyboard'


function App() {
  const [wordToGuess, setWordToGuess] = useState(()=>{
    return words[Math.floor(Math.random()* words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(wordToGuess)
  return (
    <div 
    style = {{
      maxWidth:"800px",
      display:"flex",
      flexDirection:"column",
      gap:"2rem",
      margin:"0 auto",
      alignItems:"center",
    }}>
      <div style={{fontSize:"2rem", textAlign: "center", }}>
        Lose Win
      </div>
      <HangmanDrawing/>
      <HangmanLetter/>
      <Keyboard/>
      
    </div>
  )
}

export default App
