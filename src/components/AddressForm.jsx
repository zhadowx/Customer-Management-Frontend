import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function AddressForm({ currentAddress, setCurrentAddress, onSubmit }) {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  useEffect(() => {
    if (currentAddress) {
      setAddress(currentAddress);
    }
  }, [currentAddress]);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentAddress) {
      await onSubmit(currentAddress._id, address);
    } else {
      await onSubmit(address);
    }
    setCurrentAddress(null);
    setAddress({ street: "", city: "", state: "", zip: "", country: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="street"
          className="block text-sm font-medium text-gray-700"
        >
          Street
        </label>
        <input
          id="street"
          name="street"
          value={address.street}
          onChange={handleChange}
          placeholder="Street"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          City
        </label>
        <input
          id="city"
          name="city"
          value={address.city}
          onChange={handleChange}
          placeholder="City"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="state"
          className="block text-sm font-medium text-gray-700"
        >
          State
        </label>
        <input
          id="state"
          name="state"
          value={address.state}
          onChange={handleChange}
          placeholder="State"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="zip"
          className="block text-sm font-medium text-gray-700"
        >
          Zip Code
        </label>
        <input
          id="zip"
          name="zip"
          value={address.zip}
          onChange={handleChange}
          placeholder="Zip Code"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Country
        </label>
        <input
          id="country"
          name="country"
          value={address.country}
          onChange={handleChange}
          placeholder="Country"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        {currentAddress ? "Update Address" : "Add Address"}
      </button>
    </form>
  );
}

AddressForm.propTypes = {
  currentAddress: PropTypes.shape({
    _id: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    country: PropTypes.string,
  }),
  setCurrentAddress: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddressForm;
