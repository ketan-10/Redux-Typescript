import {createSlice} from '@reduxjs/toolkit';


const nameSlice = createSlice({
  name:"name",
  initialState:{
    name:"ketan"
  },
  reducers:{
    toggelName(state){
      state.name = (state.name !== "ketan") ? "ketan" : "pooja";   
    },
    changeNameTo(state, action: {payload:string}){
      state.name = action.payload;
    }
  }
});


export const {toggelName, changeNameTo} = nameSlice.actions;
export default nameSlice.reducer;