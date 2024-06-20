import { useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { fetchAddressById } from "../api/api";
import { useParams } from "react-router-dom";

function AddressDetail() {
  const { id } = useParams();
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const getAddress = async () => {
      try {
        const response = await fetchAddressById(id);
        dispatch({ type: "SET_ADDRESS", payload: response.data.data.address });
      } catch (error) {
        console.error("Failed to fetch address", error);
      }
    };
    getAddress();
  }, [dispatch, id]);

  const address = state.currentAddress;

  if (!address) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 shadow rounded bg-white">
      <h2 className="text-2xl font-bold">{address.street}</h2>
      <p>City: {address.city}</p>
      <p>State: {address.state}</p>
      <p>Zip: {address.zip}</p>
      <p>Country: {address.country}</p>
    </div>
  );
}

export default AddressDetail;
