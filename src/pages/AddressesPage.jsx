import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import AddressForm from "../components/AddressForm";
import AddressList from "../components/AddressList";
import { createAddress, updateAddress } from "../api/api";

function AddressesPage() {
  const { dispatch } = useContext(GlobalContext);
  const [currentAddress, setCurrentAddress] = useState(null);

  const handleAddAddress = async (address) => {
    const response = await createAddress(address);
    dispatch({ type: "ADD_ADDRESS", payload: response.data.data.address });
  };

  const handleUpdateAddress = async (addressId, address) => {
    const response = await updateAddress(addressId, address);
    dispatch({ type: "UPDATE_ADDRESS", payload: response.data.data.address });
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-4">
        Address Management
      </h1>
      <AddressForm
        currentAddress={currentAddress}
        setCurrentAddress={setCurrentAddress}
        onSubmit={currentAddress ? handleUpdateAddress : handleAddAddress}
      />
      <AddressList setCurrentAddress={setCurrentAddress} />
    </div>
  );
}

export default AddressesPage;
