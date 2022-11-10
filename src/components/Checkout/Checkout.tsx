import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./stylesheet";
import CardDetails from "../Card-Details/CardDetails";
import Benefits from "../Benefits/Benefits";

const Checkout = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.paymentMainContainer}>
        <Box className={classes.checkoutWrapper}>
          <CardDetails />
          <Benefits />
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
