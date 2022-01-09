// React Imports
import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/actions/index";
// Components Imports
import Spinner from "../../../components/global/Spinner/Spinner";
// Styles

// Material UI Imports
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const ShipConfirmation = () => {
  // React Router consts
  const location = useLocation();
  const history = useHistory();
  // Redux consts
  const dispatch = useDispatch();
  // State consts

  // Function to navigate back
  const goBack = () => {
    history.goBack();
  };

  return (
    <React.Fragment>

        <Box width="100%" display="flex" justifyContent="left" p={2}>
            <h1>Order created</h1>
        </Box>

        <Box width="100%" display="flex" justifyContent="center" p={2}>
            You have successfully submitted shipment. Please create shipping label.
        </Box>
        <Box width="100%" display="flex" justifyContent="center" p={2}>
            {/* <Button variant="contained" style={{ marginRight: '1rem' }} onClick={() => history.push('/order/add-update')}>Yes</Button> */}
            <Button variant="contained" color="primary" style={{ marginRight: '1rem' }} onClick={() => history.push('/order?page=1')}>No Thanks</Button>
        </Box>

    </React.Fragment>
  );
};

export default ShipConfirmation;
