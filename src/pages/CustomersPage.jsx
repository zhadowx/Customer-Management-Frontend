import { useState } from "react";
import CustomerForm from "../components/CustomerForm";
import CustomerList from "../components/CustomerList";

function CustomersPage() {
  const [currentCustomer, setCurrentCustomer] = useState(null);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-4">
        Customer Management
      </h1>
      <CustomerForm
        currentCustomer={currentCustomer}
        setCurrentCustomer={setCurrentCustomer}
      />
      <CustomerList setCurrentCustomer={setCurrentCustomer} />
    </div>
  );
}

export default CustomersPage;
