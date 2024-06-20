import { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../context/GlobalContext";
import { fetchCustomers, deleteCustomer } from "../api/api";
import { Link } from "react-router-dom";

function CustomerList({ setCurrentCustomer }) {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    fetchCustomers().then((response) => {
      dispatch({
        type: "SET_CUSTOMERS",
        payload: response.data.data.customers,
      });
    });
  }, [dispatch]);

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    dispatch({ type: "REMOVE_CUSTOMER", payload: id });
  };

  if (!Array.isArray(state.customers)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      {state.customers.map((customer) => (
        <div key={customer._id} className="p-4 shadow rounded bg-white">
          <Link to={`/customers/${customer._id}`}>
            <h3 className="text-lg font-bold bg-blue-300 rounded text-center hover:bg-blue-500">
              {customer.name}
            </h3>
          </Link>
          <p>{customer.email}</p>
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentCustomer(customer)}
              className="mt-2 bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(customer._id)}
              className="mt-2 bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

CustomerList.propTypes = {
  setCurrentCustomer: PropTypes.func.isRequired,
};

export default CustomerList;
