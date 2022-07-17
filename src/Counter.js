import React, { useState } from 'react'
import { useSelector,useDispatch } from "react-redux"
import {increment,decrement,inpButton} from "./_redux/counter/counterSlice"



function Counter() {
    const countValue = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [amount, setAmount]=useState()
    return (
        <div style={{textAlign:"center"}}>
            <h1>{countValue}</h1>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
            <br/><br />
            <input onChange={(e)=>setAmount(e.target.value)}  type="number" />
            <button onClick={()=>dispatch(inpButton(amount))}>inpButton</button>

        </div>
    )
}

export default Counter