import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles({
  mainContainer: {
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
  },
  paymentTypo: {
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "38px",
    display: "flex",
    alignItems: "center",
    color: "#131821",
  },
  paymentLogoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "auto",
    marginTop: "20px",
    gap: "20px",
  },
  creditCardContainer: {
    display: "flex",
    alignItems: "center",
    background:
      "linear-gradient(147.95deg, #EBEEF6 14.45%, rgba(235, 238, 246, 0.6) 80.75%)",
    border: "2px solid #5680E9",
    borderRadius: "8px",
    width: "inherit",
    padding: "0.5rem 1rem",
    justifyContent: "space-between",
    gap: "1rem",
    cursor: "pointer",
  },
  creditCardTypo: {
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "32px",
    color: "#131821",
  },
  paypalContainer: {
    display: "flex",
    alignItems: "center",
    background:
      "linear-gradient(147.95deg, #EBEEF6 14.45%, rgba(235, 238, 246, 0.6) 80.75%)",
    borderRadius: "8px",
    width: "auto",
    padding: "0.5rem 1rem",
    justifyContent: "space-between",
    gap: "1rem",
    cursor: "pointer",
  },
  paypalTypo: {
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "32px",
    color: "#131821",
  },
});
