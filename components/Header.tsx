import Link from "next/link";
import React from "react";
import { FaTextHeight } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md sticky-top bg-white">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          <FaTextHeight />
        </Link>
        <div className="row">
          <form className="d-flex" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>

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
    </nav>
  );
};

export default Header;
