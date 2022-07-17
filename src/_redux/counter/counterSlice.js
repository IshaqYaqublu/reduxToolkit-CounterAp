import {createSlice} from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name:"Counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -=1
        },
        inpButton:(state,action)=>{
            state.value += Number(action.payload)
        }
    }
});
export const  {increment,decrement,inpButton} = counterSlice.actions

export default counterSlice.reducer;

