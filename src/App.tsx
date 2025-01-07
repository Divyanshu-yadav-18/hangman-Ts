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

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

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
      <HangmanDrawing numberOfGuesses = {incorrectLetters.length}/>
      <HangmanLetter/>
      <div style={{alignSelf:"stretch"}}>
      <Keyboard/>
      </div>
      
    </div>
  )
}

export default App
