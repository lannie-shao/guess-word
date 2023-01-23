type wordProp=({
  guessedLetters:string[],
  wordToGuess:string[],
  isLoser:boolean,
})

const Word = ({guessedLetters,wordToGuess,isLoser=false}:wordProp) => { 
  return (
    <div style={{
      display:"flex",
      gap:"20px",
    }}>
      {wordToGuess.map((letter,index)=>(
        <div key={index} style={{
          width:"50px",
          height:"50px",
          borderBottom:"10px solid black",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}>
          <h2 style={{
            visibility:guessedLetters.includes(letter)||isLoser ? "visible":"hidden",
            color:!guessedLetters.includes(letter) ? "red":"black"


          }}>{letter.toUpperCase()}</h2>
        </div>
      )
      )}
    
    </div>
  )
}

export default Word