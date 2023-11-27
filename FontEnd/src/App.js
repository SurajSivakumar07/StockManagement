import React, { useState } from "react";
import SignUp from "./components/signup/Signup";
import SignIn from "./components/Signin/Signin";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import "./app.css";

import Home from "./components/Home/Home";
import DashBoard from "./components/Dashboard/DashBoard";
import Products from "./components/Products/Products";
import ProductAdd from "./components/Products/ProductAdd";
import { UserContext } from "./components/Context/Context";
import Supplier from "./components/Supplier/Supplier";
import Customer from "./components/Customer/Customer";
import AddCustomers from "./components/Customer/AddCustomers";
import Category from "./components/Category/Category";

import SupplierAdd from "./components/Supplier/SupplierAdd";
export default function App() {
  // const [search, setSearch] = useState("");

  const [valid, setValid] = useState(false);

  return (
    <UserContext.Provider value={[valid, setValid]}>
      <div>
        {localStorage.getItem("loggedIn") == "true" ? <Home /> : " "}
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/addproducts" element={<ProductAdd />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/addcustomer" element={<AddCustomers />} />
          <Route path="/category" element={<Category />} />
          <Route path="/addSupplier" element={<SupplierAdd />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}
