import React, { useState } from "react";
import axios from 'axios'
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";


const initialState = {
    bathrooms: undefined,
    bedrooms: undefined,
    beds: undefined,
    bed_type: undefined,
  };


  export const AddListing = () => {
   

    const [values, setValues] = useState(initialState);

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };


  const handleSubmit = event => {
    event.preventDefault();
    const listings = { ...values, users_id: localStorage.getItem("id") };
    console.log(listings);
    axios
      .put("https://reqres.in/api/users/2", listings)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };


return(

    <form className="listing" onSubmit={handleSubmit}>
    <input
      className="input"
      type="text"
      name="label"
      onChange={handleChange}
      value={values.label}
      placeholder="Add Label"
      required
    />
      <select
        name="accomodates"
        value={values.accomodates}
        onChange={handleChange}
      >
        <option value="">Select Guest</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <select
            name="bathrooms"
            value={values.bathrooms}
            onChange={handleChange}
          >
            <option value="">Select Bathrooms</option>
            <option value="1.0">1.0</option>
            <option value="1.5">1.5</option>
            <option value="2.0">2.0</option>
          </select>


      <Button
                type="submit"
               
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>

      </form>

)


  }