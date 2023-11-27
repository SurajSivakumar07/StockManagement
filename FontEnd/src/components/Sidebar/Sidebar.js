import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
export default function Sidebar(props) {
  return (
    <>
      <div className="side-bar-wrap">
        <div className="side-bar-content">
          <ul>
            <li id="products">
              {" "}
              <i class="fa-solid fa-cart-shopping"></i> Products
            </li>

            <ul>
              <li>
                <Link to="/products">List Prodcuts</Link>
              </li>
              <li>
                <Link to="/addproducts">Add Prodcuts </Link>
              </li>
            </ul>

            <li id="products">
              <i class="fa-solid fa-user"></i> People
            </li>
            <ul>
              <li>
                <Link to="/customers">Customers</Link>
              </li>

              <li>
                <Link to="/addcustomer">Add Customers</Link>{" "}
              </li>

              <li>
                <Link to="/supplier">Supplier</Link>
              </li>

              {localStorage.getItem("admin") === "SUPPLIER" ? (
                " "
              ) : (
                <li>
                  {" "}
                  <Link to="/addSupplier">Add Supplier</Link>
                </li>
              )}
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}
