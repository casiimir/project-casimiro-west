import { combineReducers, createStore } from "redux";

const InitialState = {
  input: {
    value: "",
    visibility: false,
  },
  listArray: {
    data: [],
  },
  dropdownVisibility: {
    condition: false,
  },
};

const inputReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return { ...state, value: action.payload };

    case "SET_INPUT_VALUE_TO_EMPTY":
      return { ...state, value: "" };

    case "SET_INPUT_VISIBILITY":
      return { ...state, visibility: action.payload };
    default:
      return state;
  }
};
const dropdownVisibityReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_DROPDOWN_VISIBILITY":
      return { ...state, condition: action.payload };
    default:
      return state;
  }
};

const listArrayReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ARRAY_DATA":
      return { ...state, data: action.payload };
    case "DELETE_ARRAY_DATA":
      return {
        ...state,
        data: [...state.data].filter((_, index) => index !== action.payload),
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  input: inputReducer,
  listArray: listArrayReducer,
  dropdownVisibility: dropdownVisibityReducer,
});
const store = createStore(rootReducer, InitialState);
export default store;
