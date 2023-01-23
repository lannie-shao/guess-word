import React, { useEffect } from 'react'
type HangManProps=({
    incorrectGuessNumber:number,
})
const HangMan = ({incorrectGuessNumber}:HangManProps )=> {
    const HEAD=
            <div style={{
                width:"50px",
                height:"50px",
                borderRadius:"50%",
                border:"10px solid black",
                position:"absolute",
                top:"50px",
                right:"-30px",
            }} />
    const BODY=
        <div style={{
            width:"10px",
            height:"100px",
            background:"black",
            position:"absolute",
            top:"120px",
            right:"0px",
        }}/>
    const LEFTARM=
        <div style={{
            width:"10px",
            height:"80px",
            background:"black",
            rotate:"-55deg",
            transformOrigin:"right bottom",
            position:"absolute",
            top:"70px",
            right:"0px",
        }}/>
    const RIGHTARM=
        <div style={{
            width:"10px",
            height:"80px",
            background:"black",
            rotate:"55deg",
            transformOrigin:"left bottom",
            position:"absolute",
            top:"70px",
            right:"0px",
        }}/>
    const LEFTLEG=
        <div style={{
            width:"10px",
            height:"70px",
            background:"black",
            rotate:"45deg",
            transformOrigin:"left top",
            position:"absolute",
            top:"210px",
            right:"0px",
        }}/>
    const RIGHTLEG=
        <div style={{
            width:"10px",
            height:"70px",
            background:"black",
            rotate:"-45deg",
            transformOrigin:"right top",
            position:"absolute",
            top:"210px",
            right:"0px",
        }}/>

    const HangManParts=[HEAD,BODY,LEFTARM,RIGHTARM,LEFTLEG,RIGHTLEG]

  return (
    <div style={{position:"relative"}}>
        {HangManParts.slice(0,incorrectGuessNumber)
        .map((item,index)=>(
            <div key={index}>
            {item}
            </div>
        ))}
        <div style={{
            width:"10px",
            height:"50px",
            background:"black",
            position:"absolute",
            right:0,
        }}/>
        <div style={{
            width:"150px",
            height:"10px",
            background:"black",
            marginLeft:"120px"
        }}/>
        <div style={{
            width:"10px",
            height:"300px",
            background:"black",
            marginLeft:"120px"
        }}/>
        <div style={{
            width:"250px",
            height:"10px",
            background:"black"
        }}/>       
    </div>
  )
}

export default HangMan