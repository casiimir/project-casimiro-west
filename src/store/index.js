import { combineReducers, createStore } from "redux";

const InitialState = {
  input: {
    value: "",
    visibility: "",
  },
  listArray: {
    data: [],
  },
  dropdownVisibility: {
    condition: "",
  },
  cities: {
    data: [],
  },
  activities: {
    data: [],
  },
  attractionsMost: {
    data: [],
  },
  attractionsHighest: {
    data: [],
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

const citiesReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CITIES_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
const activitiesReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ACTIVITIES_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const attractionsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ATTRACTIONS_MOST_DATA":
      return { ...state, data: action.payload };
    case "SET_ATTRACTIONS_HIGHEST_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  input: inputReducer,
  listArray: listArrayReducer,
  dropdownVisibility: dropdownVisibityReducer,
  cities: citiesReducer,
  activities: activitiesReducer,
  attractionsMost: attractionsReducer,
  attractionsHighest: attractionsReducer,
});
const store = createStore(rootReducer, InitialState);
export default store;
