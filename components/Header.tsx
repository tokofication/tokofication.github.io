import Link from "next/link";
import React from "react";
import { FaTextHeight } from "react-icons/fa";

const Header = () => {
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            href="/"
            className="
            d-flex
            align-items-center
            mb-2
            mb-lg-0
            text-dark
            text-decoration-none me-2"
          >
            <h3>
              <FaTextHeight />
            </h3>
          </Link>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 link-secondary">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Inventory
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Customers
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Products
              </a>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <Link href={"/login"}>
              <button type="button" className="btn btn-outline-primary me-2">
                Login
              </button>
            </Link>
            <Link href={"/register"}>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
