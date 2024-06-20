import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CustomersPage from "./pages/CustomersPage";
import CustomerDetail from "./components/CustomerDetail";
import AddressesPage from "./pages/AddressesPage";
import AddressDetail from "./components/AddressDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/customers/:id" element={<CustomerDetail />} />
        <Route path="/addresses" element={<AddressesPage />} />
        <Route path="/addresses/:id" element={<AddressDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
