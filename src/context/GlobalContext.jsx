import { createContext, useReducer, useMemo } from "react";
import PropTypes from "prop-types";
import { customerReducer, addressReducer } from "./Reducers";

export const GlobalContext = createContext({});

const initialState = {
  customers: [],
  addresses: [],
  currentCustomer: null,
  currentAddress: null,
};

const mainReducer = (
  { customers, addresses, currentCustomer, currentAddress },
  action
) => ({
  customers: customerReducer(customers, action),
  addresses: addressReducer(addresses, action),
  currentCustomer:
    action.type === "SET_CUSTOMER" ? action.payload : currentCustomer,
  currentAddress:
    action.type === "SET_ADDRESS" ? action.payload : currentAddress,
});

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
