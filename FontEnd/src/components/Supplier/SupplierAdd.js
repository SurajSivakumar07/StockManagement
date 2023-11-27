import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";

import FormControl from "@mui/material/FormControl";
import axios from "axios";

export default function SupplierAdd() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [order, setOrder] = useState("");
  const postData = () => {
    axios
      .post("http://localhost:8080/customer", {
        name: name,
        phone: phone,
        email: email,
        location: location,
        status: status,
      })
      .then((res) => console.log(res));
  };
  return (
    <>
      <div className="product-add-wrap">
        <Typography variant="h6" gutterBottom>
          Add Product
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Supplier Name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              variant="standard"
              label="Email"
              sx={{ m: 1, minWidth: 120 }}
            ></FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Email"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="location"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Phone"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="CompanyName"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Order"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              onChange={(e) => {
                setOrder(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="All the details are true"
            />
          </Grid>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            style={{ margin: 28 }}
            onClick={postData}
          >
            Submit
          </Button>
        </Grid>
      </div>
    </>
  );
}
