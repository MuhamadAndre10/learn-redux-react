const { createSlice, configureStore } = require("@reduxjs/toolkit");

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    // state is the current state, automatically passed by Redux
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // action is the payload, automatically passed by Redux
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authReducer = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//     };
//   }

//   return state;
// };

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authReducer.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authReducer.actions;

export default store;
