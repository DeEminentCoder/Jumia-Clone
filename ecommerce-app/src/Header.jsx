// eslint-disable-next-line no-unused-vars
import React from "react";

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar bg-light py-0">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left Section */}
          <div className="d-flex align-items-center">
            <img
              src="https://companieslogo.com/img/orig/JMIA-356fb835.png?t=1720244492"
              alt="Sell on Jumia"
              className="icon me-1"
            />
            <a href="#" className="text-warning text-decoration-none fw-medium">
              <small className="">Sell on Jumia</small>
            </a>
          </div>
          {/* Center Section */}
          <div className="logos d-flex justify-content-center align-items-center">
            <img
              src="https://logolook.net/wp-content/uploads/2022/08/Jumia-Logo.png"
              alt="Jumia Logo"
              className="main-logo"
            />
            <img
              src="https://group-live.jumia.is/images/press/3by2/logo-jumia-pay.png"
              alt="Jumia Pay Logo"
              className="secondary-logo"
            />
          </div>
          <div className="logos d-flex justify-content-center align-items-center">
           
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header bg-white shadow-sm">
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <div className="site-logo">
            <img
              src="https://logolook.net/wp-content/uploads/2022/08/Jumia-Logo.png"
              alt="Jumia Logo"
            />
          </div>

          <div className="search-bar d-flex align-items-center gap-2 flex-grow-1 me-3">
            <input
              type="text"
              placeholder="🔍 Search products, brands and categories"
              className="form-control"
            />
            <button className="btn text-light">Search</button>
          </div>

          {/* Account Dropdown */}
          <div className="dropdown">
            <button className="dropdown-btn btn d-flex">
              <i className="bi bi-person fs-2"></i>Hi, Simeon
            </button>
            <div className="dropdown-menu">
              <a href="#" className="d-flex justify-content-around align-items-center gap-4"><i className="bi bi-person fs-3 me-2"></i> Profile</a>
              <a href="#" className="d-flex justify-content-around align-items-center gap-4"><i className="bi bi-box fs-4 me-2"></i> orders</a>
              <a href="#" className="d-flex justify-content-around align-items-center gap-4"><i className="bi bi-envelope fs-4 me-2"></i> inbox</a>
              <a href="#" className="d-flex justify-content-around align-items-center gap-4"><i className="bi bi-tools fs-5 me-2"></i> Settings</a>
              <hr />
              <a href="#" className="logout text-center">Logout</a>
            </div>
          </div>

          {/* Help Dropdown */}
          <div className="dropdown">
            <button className="dropdown-btn btn d-flex">
              <i className="bi bi-question-circle fs-4"></i> Help
            </button>
            <div className="dropdown-menu">
              <a href="#">Help Center</a>
              <a href="#">FAQs</a>
              <a href="#">Contact Us</a>
              <a href="#">Terms & Policies</a>
            </div>
          </div>

          {/* Cart */}
          <div className="cart">
            <i className="bi bi-cart3"></i>
            <span className="badge bg-danger">3</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
