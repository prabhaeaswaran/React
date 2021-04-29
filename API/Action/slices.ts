import { createSlice } from "@reduxjs/toolkit";
export interface User{
  
  user:[],

  loading: boolean;
  error: boolean;
}

const initialState: User = {
  // id:0,
  // userId:0,
  // title:"",
  user:[],
  loading: false,
  error: false,
};

export const slice = createSlice({
  name: "list",
  initialState,
  reducers: {
    createListReq: (state) => {
      state.loading = false;
    },

    createListSuccess: (state, { payload }) => {
      state.loading = false;
      state.user= payload;
    },
    createListFails: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  createListReq,
  createListSuccess,
  createListFails,
} = slice.actions;

export default slice.reducer;

export const selectorList = (state: { reducer: { user: [] } }) =>
  state.reducer.user;
export const selectorLoading = (state: { reducer: { loading: boolean } }) =>
  state.reducer.loading;
export const selectorError = (state: { reducer: { error: boolean } }) =>
  state.reducer.error;

export async function fetchRandomUser(dispatch: any) {
  dispatch(createListReq());
try{
 
    
   const data= fetch("https://jsonplaceholder.typicode.com/posts", {
    
      method: "POST",

    
      body: JSON.stringify({
        id:1,
        userId: 1,
        title: "wings of fire",
        body: "about article"
       
      }),

    
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })

      .then((response) => response.json())


      .then((json) => console.log(json));

    dispatch(createListSuccess(data));
  
}catch(err){
  dispatch(createListFails())
}
}
