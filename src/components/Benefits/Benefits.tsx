import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./stylesheet";
import { ReactComponent as Badge } from "../../assets/SVGs/Bage.svg";
import { ReactComponent as ThumbsUp } from "../../assets/SVGs/thumbsUp.svg";

const Benefits = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Badge />
      <Box className={classes.benefitsContainer}>
        <Box className={classes.benefitWrapper}>
          <ThumbsUp />
          <Typography className={classes.benefitTypo}>
            The Original WordPress SEO plugin
          </Typography>
        </Box>
        <Box className={classes.benefitWrapper}>
          <ThumbsUp />
          <Typography className={classes.benefitTypo}>
            5 million active installs
          </Typography>
        </Box>
        <Box className={classes.benefitWrapper}>
          <ThumbsUp />
          <Typography className={classes.benefitTypo}>
            All the SEO features you need
          </Typography>
        </Box>
        <Box className={classes.benefitWrapper}>
          <ThumbsUp />
          <Typography className={classes.benefitTypo}>
            10 day money back guarantee
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Benefits;
