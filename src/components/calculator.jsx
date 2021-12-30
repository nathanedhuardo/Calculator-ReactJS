import React, { useState } from 'react'
import './calculator.css'

export default function Calculator() {
    const[num,setNum]=useState(0);

    function inputNum(e) {
        var input=e.target.value
         if(num===0){
            setNum(input);
        }else{
            setNum(num + input);
        }

    }
    
     function clear(e){
         setNum(0)
     }
    return (
        <div className='container'>
            <div className='wrapper'>
                    <h1 className='result'>{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button>+/-</button>
                    <button>%</button>
                    <button className='Orange'>/</button>
                    <button className='Gray'  onClick={inputNum} value={7}>7</button>
                    <button className='Gray'  onClick={inputNum} value={8}>8</button>
                    <button className='Gray'  onClick={inputNum} value={9}>9</button>
                    <button className='Orange'>X</button>
                    <button className='Gray'  onClick={inputNum} value={4}>4</button>
                    <button className='Gray'  onClick={inputNum} value={5}>5</button>
                    <button className='Gray'  onClick={inputNum} value={6}>6</button>
                    <button className='Orange'>-</button>
                    <button className='Gray'  onClick={inputNum} value={1}>1</button>
                    <button className='Gray'  onClick={inputNum} value={2}>2</button>
                    <button className='Gray'  onClick={inputNum} value={3}>3</button>
                    <button className='Orange'>+</button>
                    <button className='Zero' onClick={inputNum} value={0}>0</button>
                    <button className='Gray'>,</button>
                    <button className='Orange'>=</button>
            </div>
        </div>
    )
}
