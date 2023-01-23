import { useEffect, useState } from 'react'
import Button from './component/Button'
import HangMan from './component/HangMan'
import Word from './component/Word'
import words from './wordList.json'

function App() {
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
  ];
  const [word, setWord] = useState(()=>{
    //pick up random word in the array
    return words[Math.floor(Math.random()*words.length)]
  });

  const letterArray:string[]=word.split("");
  const [guessedLetters,setGuessedLetters]=useState<string[]>([]);

      const incorrectGuessedLetters= guessedLetters.filter(letter=>!letterArray.includes(letter));
    
      const wrongNum=incorrectGuessedLetters.length;
      console.log(wrongNum)
      const isWinner= letterArray.every(letter=>guessedLetters.includes(letter));
      const isLoser = wrongNum >= 6;

  return (
    <div className="App" style={{
      width:"100%",
      margin:"20 auto",
      display:"flex",
      flexDirection:"column",
      gap:"20px",
      alignItems:"center"
    }}>
      <h2>{isWinner? "Well done and play again!":"" ||
       isLoser ? "Nice try! Refresh to try again"
       :"Start To Play and Good Luck!" } 
      </h2>
      <HangMan incorrectGuessNumber={wrongNum} />
      <Word guessedLetters={guessedLetters} isLoser={isLoser} wordToGuess={letterArray}/>
      <div style={{
        width:"600px",
        display:"flex",
        flexWrap:"wrap",
        gap:"10px",
      }}>
        {KEYS.map((KEY:string,index)=>(
          <Button key={index} item={KEY} isLoser={isLoser} setGuessedLetters={setGuessedLetters} guessedLetter={guessedLetters} wordToGuess={letterArray}/>      
        ))}
        </div>
    </div>
  )
}

export default App
