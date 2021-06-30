// console.log("hello2");
import { createSlice } from '@reduxjs/toolkit';



// partial-state -> reducers -> possible-actions

type Payload = {
  payload:number,
}

const counterSlice = createSlice({
  initialState: {
    count: 10,
  },
  name: "counter",
  reducers: {
    // types of actions -> and how to reduce it; 
    increment(state){
      state.count++;
    },
    incrementBy(state,acion:Payload){
      state.count+=acion.payload;
    }
  }
});


// const increment = counterSlice.actions.increment;
// const incrementBy = counterSlice.actions.incrementBy;
export const {increment, incrementBy} = counterSlice.actions; 
const reducer = counterSlice.reducer;
export default reducer;
