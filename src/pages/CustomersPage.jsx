import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CustomerList from "../components/CustomerList";
import CustomerForm from "../components/CustomerForm";
import { createCustomer, updateCustomer } from "../api/api";

function CustomersPage() {
  const { dispatch } = useContext(GlobalContext);
  const [currentCustomer, setCurrentCustomer] = useState(null);

  const handleAddCustomer = async (customer) => {
    try {
      const response = await createCustomer(customer);
      dispatch({ type: "ADD_CUSTOMER", payload: response.data.data.customer });
    } catch (error) {
      console.error("Failed to add customer", error);
    }
  };

  const handleUpdateCustomer = async (customer) => {
    try {
      const response = await updateCustomer(customer._id, customer);
      dispatch({
        type: "UPDATE_CUSTOMER",
        payload: response.data.data.customer,
      });
    } catch (error) {
      console.error("Failed to update customer", error);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <CustomerForm
        currentCustomer={currentCustomer}
        setCurrentCustomer={setCurrentCustomer}
        onSubmit={currentCustomer ? handleUpdateCustomer : handleAddCustomer}
      />
      <CustomerList setCurrentCustomer={setCurrentCustomer} />
    </div>
  );
}

export default CustomersPage;
