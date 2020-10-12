import React from 'react';
import ListingList from './ListingComponents/ListingList'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {AddListing} from './ListingComponents/AddListing'

import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
      background: "linear-gradient(45deg, #10c9e7 30%, #00d4ff 90% )",
      border: 0,
      borderRadius: 8,
      boxShadow: "0 3px 5px 2px rgba(200, 105, 135, .3)",
      color: "white",
      width: "5rem",
      height: "3rem",
      margin: "3.5rem",
      fontSize: "0.8rem",
    },
    submit2: {
      margin: theme.spacing(3, 0, 2),
      background: "black",
      border: 0,
      borderRadius: 8,
      boxShadow: "0 3px 5px 2px rgba(225, 195, 135, .3)",
      color: "white",
      width: "5rem",
      height: "3rem",
      margin: "3.5rem",
      fontSize: "0.8rem",
    },
  }));



export const Dashboard = () => {
    const welcomeMessage = window.localStorage.getItem("welcomeMessage");
    const history = useHistory();
    const handleLogout = () => {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("userId");
      window.localStorage.removeItem("welcomeMessage");
      history.push("/");
    };
  
    const classes = useStyles();

    return (
        <div>
      <div className="dashboardText">
        <h1>Dashboard</h1>
        <h2>{welcomeMessage}</h2>
      </div>
      <div className="dashboardDiv">
        <Button
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          onClick={() => console.log("Button Clicked")}
        >
          Create Listing
        </Button>

        <Button
          type="submit"
          className={classes.submit2}
          variant="contained"
          color="primary"
          onClick={handleLogout}
        >
          Logout
        </Button>

        <ListingList/>
        <AddListing/>
        
      </div>
      </div>
      
    )
}