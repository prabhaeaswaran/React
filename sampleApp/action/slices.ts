import { createSlice} from "@reduxjs/toolkit";
export interface User {
  user:object;
  loading: boolean;
  error: boolean;
}

const initialState: User = {
  user: {},
  loading: false,
  error: false,
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createListReq: (state) => {
      state.loading = false;
    },

    createListSuccess: (state,{payload}) => {
      state.loading = false;
      state.user = payload;
    },
    createListFails: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { createListReq, createListSuccess,createListFails } = slice.actions;

export default slice.reducer;

export const selectorList = (state:{reducer: { user:{}}}) =>state.reducer.user
export const selectorLoading = (state:{reducer: { loading:boolean}}) =>state.reducer.loading
export const selectorError = (state:{reducer: { error:boolean}}) =>state.reducer.error

interface Values{
  title : String;
  body :String
}
export async function fetchRandomUser(dispatch:any,value:Values){
    dispatch(createListReq())

    try {
      const response= await fetch("https://jsonplaceholder.typicode.com/posts", {

        method: "POST",
  
  
        body: JSON.stringify(
        {value}),
  
  
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      const data=await response.json();
      dispatch(createListSuccess(data))
    } catch (error) {
      dispatch(createListFails());
    }
  }
