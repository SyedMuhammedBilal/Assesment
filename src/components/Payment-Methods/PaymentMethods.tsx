import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./stylesheet";
import { ReactComponent as Visa } from "../../assets/SVGs/Visa.svg";
import { ReactComponent as MasterCard } from "../../assets/SVGs/MasterCard.svg";
import { ReactComponent as Paypal } from "../../assets/SVGs/PayPal.svg";
import { ReactComponent as Discover } from "../../assets/SVGs/Discover.svg";
import { ReactComponent as AmericanExpress } from "../../assets/SVGs/AmericanExpress.svg";

const PaymentMethods = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Typography className={classes.paymentTypo}>
        Selecy Payment Method
      </Typography>

      <Box className={classes.paymentLogoContainer}>
        <Box className={classes.creditCardContainer}>
          <Typography className={classes.creditCardTypo}>
            Credit Card
          </Typography>
          <Visa />
          <MasterCard />
          <AmericanExpress />
          <Discover />
        </Box>

        <Box className={classes.paypalContainer}>
          <Typography className={classes.paypalTypo}>Paypal</Typography>
          <Paypal />
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentMethods;
