
import {createSlice,PayloadAction} from "@reduxjs/toolkit";
export interface student 
{
  list:[],
  loading:boolean,
  error:boolean

}

const initialState:student={
 list:[],
 loading:false,
 error:false,
}
export const slice = createSlice({
  name:'list',
  initialState,
  reducers:{

    fetchListReq:(state)=>{
      state.loading=false
    },

    fetchListSuccess:(state,action:PayloadAction<[]>)=>{
        state.loading=false;
        state.list=action.payload;
    },
  //   fetchListFails:(state)=>{
  //       state.loading=false,
  //       state.error=true
  // }
   
  }
});

export const {fetchListReq,fetchListSuccess} = slice.actions;

export default slice.reducer;

export const Selector = (state :any) => state.list

export const fetchUsers=() => async(dispatch : any) =>{
  dispatch(fetchListReq());

 try{
  const response=await fetch('https://jsonplaceholder.typicode.com/todos')
  const data =await response.json();
  dispatch(fetchListSuccess(data.title))
} catch(err){ 
  console.log(err)
}
}

