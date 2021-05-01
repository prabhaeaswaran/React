import { createSlice} from "@reduxjs/toolkit";
export interface student {
  list: [];
  loading: boolean;
  error: boolean;
}

const initialState: student = {
  list: [],
  loading: false,
  error: false,
};

export const slice = createSlice({
  name: "list",
  initialState,
  reducers: {
    fetchListReq: (state) => {
      state.loading = false;
    },

    fetchListSuccess: (state,{payload}) => {
      state.loading = false;
      state.list = payload;
    },
    fetchListFails: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchListReq, fetchListSuccess,fetchListFails } = slice.actions;

export default slice.reducer;

export const selectorList = (state:{reducer: { list:[]}}) =>state.reducer.list
export const selectorLoading = (state:{reducer: { loading:boolean}}) =>state.reducer.loading
export const selectorError = (state:{reducer: { error:boolean}}) =>state.reducer.error


export async function fetchRandomUser(dispatch:any){
    dispatch(fetchListReq())

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
  
      dispatch(fetchListSuccess(data))
    } catch (error) {
      dispatch(fetchListFails());
    }
  }
