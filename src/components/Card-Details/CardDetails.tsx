import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./stylesheet";
import Buttons from "../reusable-components/Buttons/Buttons";
import PaymentMethods from "../Payment-Methods/PaymentMethods";

const CardDetails = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.cardDetailsContainer}>
        <Box className={classes.paymentContainer}>
          <PaymentMethods />
        </Box>
        <Typography className={classes.cardDetailsTypo}>
          Pay with your credit card
        </Typography>

        <Box className={classes.cardDetailsInputContainer}>
          <Box className={classes.cardDetailsInput}>
            <Typography className={classes.cardDetailsInputTypo}>
              Card Number
              <span style={{
                    color: 'red',
                    fontSize: '1.5rem',
                    marginLeft: '0.3rem'
                    
                }}>
                    *
                </span>
            </Typography>
            <input
              type="text"
              placeholder="1256 6785 3490 3256"
              className={classes.cardDetailsInputField}
            />
          </Box>

          <Box className={classes.cardPersonalDetail}>
            <Box className={classes.cardDetailsInput}>
              <Typography className={classes.cardDetailsInputTypo}>
                Expiry Date
                {/* add * also with orange color */}
                <span style={{
                    color: 'red',
                    fontSize: '1.5rem',
                    marginLeft: '0.3rem'

                }}>
                    *
                </span>
              </Typography>
              <input
                type="text"
                placeholder="mm / yy"
                className={classes.cardDetailsInputField}
              />
            </Box>
            <Box className={classes.cardDetailsInput}>
              <Typography className={classes.cardDetailsInputTypo}>
                Card Code (cvc)
                <span style={{
                    color: 'red',
                    fontSize: '1.5rem',
                    marginLeft: '0.3rem'
                    
                }}>
                    *
                </span>
              </Typography>
              <input
                type="text"
                placeholder="cvc"
                className={classes.cardDetailsInputField}
              />
            </Box>
          </Box>
        </Box>
        <Box className={classes.buttonContainer}>
          <Buttons />
        </Box>
      </Box>
    </>
  );
};

export default CardDetails;
