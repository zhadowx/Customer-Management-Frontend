import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function CustomerForm({ currentCustomer, setCurrentCustomer, onSubmit }) {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (currentCustomer) {
      setCustomer(currentCustomer);
    }
  }, [currentCustomer]);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (typeof onSubmit === "function") {
      await onSubmit(customer);
      setCurrentCustomer(null);
      setCustomer({ name: "", email: "" });
    } else {
      console.error("onSubmit is not a function");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          value={customer.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={customer.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        {currentCustomer ? "Update Customer" : "Add Customer"}
      </button>
    </form>
  );
}

CustomerForm.propTypes = {
  currentCustomer: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  setCurrentCustomer: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CustomerForm;
