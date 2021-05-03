import {  createSlice } from "@reduxjs/toolkit";
import _, { fromPairs } from "lodash";
import { countReset } from "node:console";

interface fruitsObj{
  id:number,
  name:String
}
interface Icounter{
  count:number,
  id:number,
  name:string
}

interface fruitsArrObj {
  fruits: Array<fruitsObj>;
  counter: Array<Icounter>;
}

const initialState: fruitsArrObj = {
  fruits: [
    { id: 1, name: "strawberry" },
    { id: 2, name: "Apple" },
    { id: 3, name: "Banana" },
    { id: 4, name: "Papaya" },
    { id: 5, name: "Jackfruit" },
   
  ],
  counter: [],
};

export const slice = createSlice({
  name: "fruits",
  initialState,
  reducers: {
    selectFruit: (state, {payload}) => {
    
      let found=false
      state.counter.forEach((element)=>{
  
        if(element.id===payload.id)
        {
          element.count+=1;
          found=true
        }
      })
      if(!found){
        state.counter.push({id:payload.id,count:1,name:payload.name})
      }
    },
   
    removeFruit: (state,{payload}) => {
      let count=payload.count
        state.counter.forEach((element)=>{
          if(count>0 && (element.id===payload.id)){
      
              element.count-=1;
            }
            
          if(count===0 && (element.id===payload.id)){
            state.counter.pop()
           
          }
          element.name=element.name
        })   
    },
    removeAllFruit:(state,{payload})=>{
      state.counter=_.remove(state.counter,payload)
    },

    findFruit:(state,{payload})=>{
      state.fruits.forEach((element)=>{
        if((element.name)===payload)
        {
          state.fruits=[]
          state.fruits.push(payload)
        }
        state.fruits=initialState.fruits
      })
      console.log(state.fruits)
      // state.counter= _.find(state.counter,(n)=>{
      //   if(n.name===payload)
      //   return payload
      //   },1);
        
     
    
      }
  }
});

export const { selectFruit, removeFruit,removeAllFruit,findFruit} = slice.actions;

export default slice.reducer;

export const selectorSelect = (state:{reducer: { counter:[]}}) =>state.reducer.counter

export const displayFruit=(state:{reducer:{fruits:[{}]}})=>state.reducer.fruits

export function  pickFruits(dispatch:any,values:{id:number,name:string})
{ 
  dispatch(selectFruit(values));  
}

export function deleteAllFruits(dispatch:any,val:any){
  dispatch(removeAllFruit(val))
}
export function deleteFruits(dispatch:any,values:any){
dispatch(removeFruit(values));
}
export function searchFruit(dispatch:any,val:any){
  dispatch(findFruit(val));
}