export const customerReducer = (state, action) => {
  switch (action.type) {
    case "SET_CUSTOMERS":
      return action.payload;
    case "SET_CUSTOMER":
      return { ...state, currentCustomer: action.payload };
    case "ADD_CUSTOMER":
      return [...state, action.payload];
    case "UPDATE_CUSTOMER":
      return state.map((customer) =>
        customer._id === action.payload._id ? action.payload : customer
      );
    case "REMOVE_CUSTOMER":
      return state.filter((customer) => customer._id !== action.payload);
    default:
      return state;
  }
};

export const addressReducer = (state, action) => {
  switch (action.type) {
    case "SET_ADDRESSES":
      return action.payload;
    case "SET_ADDRESS":
      return { ...state, currentAddress: action.payload };
    case "ADD_ADDRESS":
      return [...state, action.payload];
    case "UPDATE_ADDRESS":
      return state.map((address) =>
        address._id === action.payload._id ? action.payload : address
      );
    case "REMOVE_ADDRESS":
      return state.filter((address) => address._id !== action.payload);
    default:
      return state;
  }
};
