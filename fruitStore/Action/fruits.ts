import { createSlice } from "@reduxjs/toolkit";
import _, { fromPairs } from "lodash";

interface fruitsObj {
  id: number;
  name: String;
}

interface Icounter {
  count: number;
  id: number;
  name: string;
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
    selectFruit: (state, { payload }) => {
      let found = false;
      state.counter.forEach((element) => {
        if (element.id === payload.id) {
          element.count += 1;
          found = true;
        }
      });
      if (!found) {
        state.counter.push({ id: payload.id, count: 1, name: payload.name });
      }
    },

    removeFruit: (state, { payload }) => {
      let count = payload.count;
      state.counter.forEach((element) => {
        if (count > 0 && element.id === payload.id) {
          element.count -= 1;
        }

        if (count === 0 && element.id === payload.id) {
          let index = state.counter.indexOf(element);
          //  state.counter=_.remove(state.counter,["name",payload.name]);
          if (index > -1) 
           state.counter.splice(index, 1);
        }
      });
    },
    removeAllFruit: (state, { payload }) => {
      state.counter = _.remove(state.counter, payload);
    },
    searchFruit: (state, { payload }) => {
      state.fruits = _.filter(state.fruits, ["name", payload]);
    },
    showFruit: (state) => {
      state.fruits = initialState.fruits;
    },
    deleteEachFruit: (state, { payload }) => {
      state.counter.forEach((element) => {
        if (element.id === payload.id) {
          let index = state.counter.indexOf(element);
          state.counter.splice(index,2)
        }
      });
    },
  },
});
export const {
  selectFruit,
  removeFruit,
  removeAllFruit,
  searchFruit,
  showFruit,
  deleteEachFruit,
} = slice.actions;

export default slice.reducer;

export const selectorSelect = (state: { reducer: { counter: [] } }) =>
  state.reducer.counter;

export const displayFruit = (state: { reducer: { fruits: [{}] } }) =>
  state.reducer.fruits;

export function pickFruits(
  dispatch: any,
  values: { id: number; name: string }
) {
  dispatch(selectFruit(values));
}

export function deleteAllFruits(dispatch: any, val:{}) {
  dispatch(removeAllFruit(val));
}
export function deleteFruits(dispatch: any, values:{}) {
  dispatch(removeFruit(values));
}

export function findFruits(dispatch: any, values:String) {
  dispatch(searchFruit(values));
}

export function dispFruit(dispatch: any) {
  dispatch(showFruit());
}

export function deleteEach(dispatch: any, values:{}) {
  dispatch(deleteEachFruit(values));
}
