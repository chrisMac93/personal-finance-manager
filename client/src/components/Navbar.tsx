import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="h-full min-h-screen w-64 text-white flex flex-col"
      style={{ position: "fixed", backgroundColor: 'rgba(0, 0, 0, 0)' }}
    >
      <div className="px-5 py-4">
        <h1 className="text-xl font-bold text-space-accent">Space Finance</h1>
      </div>
      <ul className="flex flex-col py-4">
        <li>
          <Link
            to="/"
            className="text-lg px-5 py-2 hover:bg-space-dark rounded transition duration-300"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/transactions"
            className="text-lg px-5 py-2 hover:bg-space-dark rounded transition duration-300"
          >
            Transactions
          </Link>
        </li>
        <li>
          <Link
            to="/budget"
            className="text-lg px-5 py-2 hover:bg-space-dark rounded transition duration-300"
          >
            Budget
          </Link>
        </li>
        <li>
          <Link
            to="/investments"
            className="text-lg px-5 py-2 hover:bg-space-dark rounded transition duration-300"
          >
            Investments
          </Link>
        </li>
        <li>
          <Link
            to="/support"
            className="text-lg px-5 py-2 hover:bg-space-dark rounded transition duration-300"
          >
            Support
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
