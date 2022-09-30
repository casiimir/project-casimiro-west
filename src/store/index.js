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
  otherCities: {
    data: [],
  },
  activities: {
    data: [],
  },
  categories: {
    cruiseActivitesData: [],
    airActivitiesData: [],
    cityActivitiesData: [],
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

const otherCitiesReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_OTHER_CITIES_DATA":
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

const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CRUISE_ACTIVITIES_DATA":
      return { ...state, cruiseActivitiesData: action.payload };
    case "SET_AIR_ACTIVITIES_DATA":
      return { ...state, airActivitiesData: action.payload };
    case "SET_CITY_ACTIVITIES_DATA":
      return { ...state, cityActivitiesData: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  input: inputReducer,
  listArray: listArrayReducer,
  dropdownVisibility: dropdownVisibityReducer,
  cities: citiesReducer,
  otherCities: otherCitiesReducer,
  activities: activitiesReducer,
  categories: categoriesReducer,
});

const store = createStore(rootReducer, InitialState);
export default store;
