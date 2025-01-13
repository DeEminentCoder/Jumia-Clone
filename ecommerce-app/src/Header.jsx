// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Dropdown,
} from "react-bootstrap";

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <Navbar className="bg-light py-0">
        <div className="container d-flex justify-content-between align-items-center">
          <div href="#" className="d-flex align-items-center">
            <img
              src="https://companieslogo.com/img/orig/JMIA-356fb835.png?t=1720244492"
              alt=""
              className="me-1"
              width={15}
            ></img>
            <a href="" className="text-warning text-decoration-none fw-medium">
              <small>Sell on Jumia</small>
            </a>
          </div>
          <div>
            <img
              src="https://logolook.net/wp-content/uploads/2022/08/Jumia-Logo.png"
              alt=""
              className=""
              width={60}
            />
            <img
              src="https://group-live.jumia.is/images/press/3by2/logo-jumia-pay.png"
              alt=""
              width={80}
            />
          </div>
          <div></div>
        </div>
      </Navbar>

      {/* Main Header */}
      <Navbar className="bg-white shadow-sm py-0">
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Navbar.Brand>
            <img
              src="https://logolook.net/wp-content/uploads/2022/08/Jumia-Logo.png"
              alt="Site Logo"
              width={150}
            />
          </Navbar.Brand>

          {/* Search Bar */}
          <Form className="d-flex flex-grow-1">
            <FormControl
              type="search"
              placeholder="🔍 Search products, brands and categories"
              className="me-2 py-2"
            />
            <button className="btn btn-warning px-4 text-light">
              <span>Search</span>
            </button>
          </Form>

          {/* Account Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="link" className="text-dark">
              <i className="bi bi-person-circle me-2"></i> Simeon Kenny
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Profile</Dropdown.Item>
              <Dropdown.Item href="#">Settings</Dropdown.Item>
              <Dropdown.Item href="#">Notifications</Dropdown.Item>
              <Dropdown.Item href="#">Messages</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#" className="text-danger">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Help Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="link" className="text-dark">
              <i className="bi bi-question-circle me-2"></i> Help
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Help Center</Dropdown.Item>
              <Dropdown.Item href="#">FAQs</Dropdown.Item>
              <Dropdown.Item href="#">Contact Us</Dropdown.Item>
              <Dropdown.Item href="#">Terms & Policies</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Cart */}
          <Nav.Link href="#" className="text-dark">
            <i className="bi bi-cart3"></i>
            <span className="badge bg-danger">3</span>
          </Nav.Link>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
