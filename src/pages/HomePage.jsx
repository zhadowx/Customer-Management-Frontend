import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h1 className="text-2xl font-bold">Home Page</h1>
    <p>Welcome to the home page!</p>
    <nav className="mt-4">
      <Link to="/customers" className="mr-4 text-blue-500">
        Manage Customers
      </Link>
      <Link to="/addresses" className="text-blue-500">
        Manage Addresses
      </Link>
    </nav>
  </div>
);

export default HomePage;
