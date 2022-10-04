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
    inCityActivitiesData: [],
  },
  categories: {
    cruiseActivitesData: [],
    airActivitiesData: [],
    cityActivitiesData: [],
  },
  cart: {
    data: [],
  },
  attractions: {
    attractionsMost: [],
    attractionsHighest: [],
    countryAttractions: [],
  },

  SingleActivity: {
    data: [],
  },

 selectedCountry: {
    value: "",
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
    case "SET_IN_CITY_ACTIVITIES_DATA":
      return { ...state, inCityActivitiesData: action.payload };
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

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CART_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const attractionsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ATTRACTIONS_MOST_DATA":
      return { ...state, attractionsMost: action.payload };
    case "SET_ATTRACTIONS_HIGHEST_DATA":
      return { ...state, attractionsHighest: action.payload };
    case "SET_COUNTRY_DATA":
      return { ...state, countryAttractions: action.payload };
    default:
      return state;
  }
};

const SingleActivityReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_SINGLE_ACTIVITY_DATA":
      return { data: action.payload };
    default:
      return state;
  }
};

const selectReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_SELECTED_COUNTRY_VALUE":
      return { value: action.payload };
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
  attractions: attractionsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  SingleActivity: SingleActivityReducer,
  selectedCountry:selectReducer
});

const store = createStore(rootReducer, InitialState);
export default store;



