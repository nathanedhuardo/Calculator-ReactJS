import React from 'react'
import './calculator.css'

export default function Calculator() {
    return (
        <div className='container'>
            <div className='wrapper'>
                    <button>AC</button>
                    <button>+/-</button>
                    <button>%</button>
                    <button className='Orange'>/</button>
                    <button className='Gray'  value={7}>7</button>
                    <button className='Gray'  value={8}>8</button>
                    <button className='Gray'  value={9}>9</button>
                    <button className='Orange'>X</button>
                    <button className='Gray'  value={4}>4</button>
                    <button className='Gray'  value={5}>5</button>
                    <button className='Gray'  value={6}>6</button>
                    <button className='Orange'>-</button>
                    <button className='Gray'  value={1}>1</button>
                    <button className='Gray'  value={2}>2</button>
                    <button className='Gray'  value={3}>3</button>
                    <button className='Orange'>+</button>
                    <button className='Zero' value={0}>0</button>
                    <button className='Gray'>,</button>
                    <button className='Orange'>=</button>
            </div>
        </div>
    )
}
