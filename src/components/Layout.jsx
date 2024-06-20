import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <Link to="/">
          <img
            src="/src/assets/customer-management-logo.webp"
            alt="App Logo"
            className="h-12 object-cover rounded-full"
          />
        </Link>
        <nav>
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/customers" className="mr-4">
            Customers
          </Link>
          <Link to="/addresses">Addresses</Link>
        </nav>
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Customer Management App. All rights
          reserved.
        </p>
        <p>
          Contact us:{" "}
          <a href="mailto:support@customerapp.com" className="text-blue-400">
            support@customerapp.com
          </a>
        </p>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
