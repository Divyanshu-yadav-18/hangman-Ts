import { useCallback, useEffect, useState } from 'react'
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

  const isLoser = incorrectLetters.length >= 6
  const isWin = wordToGuess.split("").every(letter=> guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter:string)=>{
      if(guessedLetters.includes(letter) || isLoser || isWin) return

      setGuessedLetters(currentLetters => [...currentLetters,letter])
    },
    [guessedLetters, isLoser, isWin]
  )
  useEffect(()=>{
    const handler = (e:KeyboardEvent)=>{
      const key = e.key

      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)

    return()=>{
      document.removeEventListener("keypress", handler)
    }
  },[guessedLetters])

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
        {isWin && "WINNER Refresh to play again"}
        {isLoser && "YOU LOSE"}
      </div>
      <HangmanDrawing numberOfGuesses = {incorrectLetters.length}/>
      <HangmanLetter guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{alignSelf:"stretch"}}>
      <Keyboard
        disabled = {isWin || isLoser}
        activeLetter = {guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetter = {incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        
      />
      </div>
      
    </div>
  )
}

export default App
