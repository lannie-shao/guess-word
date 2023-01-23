import styles from './keyboardButton.module.css'
import { useCallback, useState } from 'react'
// import { useSelector } from 'react-redux'

type buttonProps=({
  wordToGuess:string[],
  setGuessedLetters:React.Dispatch<React.SetStateAction<string[]>>,
  item:string,
  isLoser:boolean,
  guessedLetter:string[]
})
const Button = ({wordToGuess,guessedLetter,setGuessedLetters,item,isLoser=false}:buttonProps) => {
  const [key, setKey] = useState<string>('')
  const [inactive, setInactive] = useState(false)
  const [active, setActive] = useState(false)
  const addGuessedLetter : React.MouseEventHandler=(e)=>{
    setKey((e.target as HTMLButtonElement).value)
    if(key===item && wordToGuess.includes(item)){
       setActive(true) 
    }else{
       setInactive(true)
    }
     guessedLetter.push(item)
     setGuessedLetters(guessedLetter);
  }
    
  return (
        <button className={`${styles.btn} 
        ${active? styles.active:""}
        ${inactive?styles.inactive:""}`}
        style={{
          width:"50px",
          height:"50px",
          border:"3px solid black",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          cursor:"pointer",
        }} 
        disabled={inactive||active||isLoser}
         value={item}
         onClick={addGuessedLetter}>
          <h2 style={{
            textTransform:"uppercase",
          }}>{item}</h2>
        </button>
  )
}

export default Button