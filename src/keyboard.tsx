import style from './keyboard.module.css'

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    disabled?: boolean
    activeLetter: string[]
    inactiveLetter: string[]
    addGuessedLetter:(letter:string)=> void
}

export function Keyboard({activeLetter,inactiveLetter,addGuessedLetter,disabled = false}:KeyboardProps){
    return <div style={
        
        {display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(75px, 1fr))", gap:".5rem",}}>
        {KEYS.map(key =>{
            
            const isActive = activeLetter.includes(key)
            const isInActive = inactiveLetter.includes(key)
            return( <button onClick={()=> addGuessedLetter(key)} 
             className={`${style.btn} ${isActive? style.active:""} ${isInActive? style.inactive:""}`} 
              disabled={isActive || isInActive || disabled} key={key}>{key}
              </button>)
        })}
    </div>
} 