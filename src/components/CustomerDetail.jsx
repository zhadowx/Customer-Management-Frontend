import { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import {
  fetchCustomerById,
  updateCustomer,
  createAddress,
  updateAddress,
  deleteAddress,
} from "../api/api";
import { useParams } from "react-router-dom";
import AddressForm from "./AddressForm";
import CustomerForm from "./CustomerForm";

function CustomerDetail() {
  const { id } = useParams();
  const { state, dispatch } = useContext(GlobalContext);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(false);

  useEffect(() => {
    const getCustomer = async () => {
      try {
        const response = await fetchCustomerById(id);
        dispatch({
          type: "SET_CUSTOMER",
          payload: response.data.data.customer,
        });
        setAddresses(response.data.data.customer.addresses);
      } catch (error) {
        console.error("Failed to fetch customer", error);
      }
    };
    getCustomer();
  }, [dispatch, id]);

  const refreshCustomerData = async () => {
    try {
      const response = await fetchCustomerById(id);
      dispatch({ type: "SET_CUSTOMER", payload: response.data.data.customer });
      setAddresses(response.data.data.customer.addresses);
    } catch (error) {
      console.error("Failed to refresh customer data", error);
    }
  };

  const handleAddAddress = async (address) => {
    try {
      const response = await createAddress(address);
      const newAddress = response.data.data.address;
      setAddresses([...addresses, newAddress._id]);
      await updateCustomer(id, { addresses: [...addresses, newAddress._id] });
      await refreshCustomerData();
    } catch (error) {
      console.error("Failed to add address", error);
    }
  };

  const handleUpdateAddress = async (addressId, address) => {
    try {
      await updateAddress(addressId, address);
      await refreshCustomerData();
    } catch (error) {
      console.error("Failed to update address", error);
    }
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      await deleteAddress(addressId);
      const updatedAddresses = addresses.filter(
        (addrId) => addrId !== addressId
      );
      setAddresses(updatedAddresses);
      await updateCustomer(id, { addresses: updatedAddresses });
      await refreshCustomerData();
    } catch (error) {
      console.error("Failed to delete address", error);
    }
  };

  const handleUpdateCustomer = async (customer) => {
    try {
      await updateCustomer(id, customer);
      await refreshCustomerData();
      setEditingCustomer(false);
    } catch (error) {
      console.error("Failed to update customer", error);
    }
  };

  const customer = state.currentCustomer;

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 shadow rounded bg-white">
      <h2 className="text-2xl font-bold">{customer.name}</h2>
      <p>Email: {customer.email}</p>
      <button
        onClick={() => setEditingCustomer(true)}
        className="mt-2 bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded"
      >
        Edit Customer
      </button>
      {editingCustomer && (
        <CustomerForm
          currentCustomer={customer}
          setCurrentCustomer={() => setEditingCustomer(false)}
          onSubmit={handleUpdateCustomer}
        />
      )}
      <h3 className="text-lg font-bold">Addresses</h3>
      <ul>
        {customer.addresses.map((address) => (
          <li key={address._id} className="mb-2">
            {address.street}, {address.city}, {address.state} {address.zip},{" "}
            {address.country}
            <button
              onClick={() => setCurrentAddress(address)}
              className="ml-2 bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteAddress(address._id)}
              className="ml-2 bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <AddressForm
        currentAddress={currentAddress}
        setCurrentAddress={setCurrentAddress}
        onSubmit={currentAddress ? handleUpdateAddress : handleAddAddress}
      />
    </div>
  );
}

export default CustomerDetail;
