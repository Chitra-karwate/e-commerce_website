import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid px-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 me-5">
              <li className="nav-item">
                <a className="nav-link active fs-5" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            <div className="col-12 col-lg-5">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 fs-5"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success fs-5" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="d-flex align-items-center">          
          <a href='./card'>
            <img src="https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt=""
            style={{ height: "50px", marginRight: "27px" }}
            ></img>
          </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
