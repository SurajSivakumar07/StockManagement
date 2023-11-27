import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import "./product.css";

import FormControl from "@mui/material/FormControl";

import axios from "axios";
import { storage } from "../../firebase/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function ProductAdd() {
  const [category, setCategory] = React.useState();

  const [name, setName] = React.useState("");

  const [quantity, setQunatity] = React.useState();
  const [price, setPrice] = React.useState();

  const [description, setDescription] = React.useState();

  const [code, setCode] = React.useState("");

  const [image, setIamge] = React.useState("");

  const uploadFile = () => {
    const metadata = {
      contentType: "image/jpeg",
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, "images/" + image);
    const uploadTask = uploadBytesResumable(storageRef, image, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setIamge(downloadURL);
        });
      }
    );

    const myTimeout = setTimeout(addData, 7000);
  };

  const addData = () => {
    if (category == "mobile") setCode("1");
    else if (category == "tv") setCode("2");
    else if (category == "watch") setCode("3");
    else setCode("4");
    axios
      .post("http://localhost:8080/category", {
        prodName: name,
        image: image,
        price: parseInt(price),
        quantity: parseInt(quantity),
        category: category,
        code: code,
      })
      .then((res) => alert(res.data));
  };

  return (
    <React.Fragment>
      <div className="product-add-wrap">
        <Typography variant="h6" gutterBottom>
          Add Product
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              {/* <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Product Type"
                onChange={(e) => {
                  setCategory(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value={10}>Mobile</MenuItem>
                <MenuItem value={20}>Telivison</MenuItem>
                <MenuItem value={30}>Laptop</MenuItem>
              </Select> */}
              <select
                onChange={(e) => {
                  setCategory(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <option>Select</option>
                <option>mobile</option>
                <option>tv</option>
                <option>laptop</option>
                <option>watch</option>
              </select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="product name"
              name="product name"
              label="Product Name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <input type="file" onChange={(e) => setIamge(e.target.files[0])} />
            {/* <TextField
              required
              id="address1"
              name="address1"
              label="Img URL"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            /> */}
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Quantity"
              name="Quantity"
              label="Quantity"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              onChange={(e) => {
                setQunatity(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="Price"
              name="Price"
              label="Price"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Description"
              name="Description"
              label="Description"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              onChange={(e) => {
                setDescription(e.target.value);
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
            onClick={uploadFile}
          >
            Submit
          </Button>
        </Grid>
      </div>
    </React.Fragment>
  );
}
