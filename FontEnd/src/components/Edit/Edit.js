import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./edit.css";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useState } from "react";

export default function Edit(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState();

  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [order, setOrder] = useState("");
  const postData = (id) => {
    axios
      .put(`http://localhost:8080/customer`, {
        id: id,
        name: name,
        phone: phone,
        email: name,
        location: location,
        status: status,
      })
      .then((res) => console.log(res));
  };
  return props.trigger ? (
    <React.Fragment>
      <div className="product-add-wrap1">
        <Typography variant="h6" gutterBottom>
          Edit Product
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Product Id"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Product Id"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="phone"
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
              label="email"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="location"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="status"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="order"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setOrder(e.target.value);
              }}
            />
          </Grid>

          <Button
            variant="contained"
            color="success"
            style={{ height: 20, marginTop: 40, marginLeft: 10 }}
            onClick={postData()}
          >
            Success
          </Button>
          <Button
            variant="outlined"
            color="error"
            style={{ height: 20, marginTop: 40 }}
            onClick={() => props.Trigger(false)}
          >
            Cancel
          </Button>
        </Grid>
      </div>
    </React.Fragment>
  ) : (
    ""
  );
}
