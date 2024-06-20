import { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../context/GlobalContext";
import { fetchAddresses, deleteAddress } from "../api/api";
import { Link } from "react-router-dom";

function AddressList({ setCurrentAddress }) {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    fetchAddresses().then((response) => {
      dispatch({
        type: "SET_ADDRESSES",
        payload: response.data.data.addresses,
      });
    });
  }, [dispatch]);

  const handleDelete = async (id) => {
    await deleteAddress(id);
    dispatch({ type: "REMOVE_ADDRESS", payload: id });
  };

  if (!Array.isArray(state.addresses)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      {state.addresses.map((address) => (
        <div key={address._id} className="p-4 shadow rounded bg-white">
          <Link to={`/addresses/${address._id}`}>
            <h3 className="text-lg font-bold bg-blue-300 rounded text-center hover:bg-blue-500">
              {address.street}
            </h3>
          </Link>
          <p>
            {address.city}, {address.state} {address.zip}, {address.country}
          </p>
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentAddress(address)}
              className="mt-2 bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(address._id)}
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

AddressList.propTypes = {
  setCurrentAddress: PropTypes.func.isRequired,
};

export default AddressList;
