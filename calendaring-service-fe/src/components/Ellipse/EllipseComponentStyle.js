// import {
//   whiteColor,
//   grayColor,
// } from "../../../../../material-kit-pro-react-v1.9.0/src/assets/jss/material-kit-pro-react";

const EllipseComponentStyle = {
  ellipse: {
    //this is for another component
    // position: "absolute",
    width: "119px",
    height: "115px",
    left: "237px",
    top: "21px",
    backgroundColor: "whitesmoke",
    borderRadius: "50%",
    // background: url(Training1.png),
  },
  modalRoot: {
    overflow: "auto",
    display: "block",
  },
  modal: {
    maxWidth: "500px",
    margin: "auto",
    borderRadius: "6px",
    overflow: "visible",
    maxHeight: "unset",
    width: "100%",
    marginTop: "130px !important",
  },
  modalHeader: {
    borderBottom: "none",
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "0",
    paddingLeft: "24px",
    minHeight: "16.43px",
  },
  modalTitle: {
    margin: "0",
    lineHeight: "1.5",
  },
  modalCloseButton: {
    "&, &:hover": {
      // color: grayColor[0],
      color: "gray",
    },
    "&:hover": {
      opacity: "1",
    },
    cursor: "pointer",
    padding: "1rem",
    margin: "-1rem -1rem -1rem auto",
    backgroundColor: "transparent",
    border: "0",
    WebkitAppearance: "none",
    float: "right",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    // textShadow: "0 1px 0 " + "white",
    opacity: ".5",
  },
  modalClose: {
    width: "16px",
    height: "16px",
  },
  modalBody: {
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "16px",
    paddingLeft: "24px",
    position: "relative",
    overflow: "visible",
  },
  modalFooter: {
    padding: "15px",
    textAlign: "right",
    paddingTop: "0",
    margin: "0",
  },
  modalFooterCenter: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  instructionNoticeModal: {
    marginBottom: "25px",
  },
  imageNoticeModal: {
    maxWidth: "150px",
  },
  modalSmall: {
    margin: "0 auto",
  },
  modalSmallBody: {
    marginTop: "20px",
  },
  modalSmallFooterFirstButton: {
    margin: "0",
    paddingLeft: "16px",
    paddingRight: "16px",
    width: "auto",
  },
  modalSmallFooterSecondButton: {
    marginBottom: "0",
    marginLeft: "5px",
  },
  modalLogin: {
    maxWidth: "360px",
    overflowY: "visible",
    width: "100%",
    "& $modalCloseButton": {
      color: "white",
      top: "-10px",
      right: "10px",
      textShadow: "none",
      position: "relative",
    },
    "& $modalHeader": {
      borderBottom: "none",
      paddingTop: "24px",
      paddingRight: "24px",
      paddingBottom: "0",
      paddingLeft: "24px",
    },
    "& $modalBody": {
      paddingBottom: "0",
      paddingTop: "0",
    },
    "& $modalFooter": {
      paddingBottom: "0",
      paddingTop: "0",
    },
  },
  modalLoginCard: {
    marginBottom: "0",
    margin: "0",
    "& $modalHeader": {
      paddingTop: "0",
    },
  },
  modalSignup: {
    maxWidth: "900px",
    width: "100%",
    "& $modalHeader": {
      paddingTop: "0",
    },
    "& $modalTitle": {
      textAlign: "center",
      width: "100%",
      marginTop: "0.625rem",
    },
    "& $modalBody": {
      paddingBottom: "0",
      paddingTop: "0",
    },
  },
  modalSignupCard: {
    padding: "40px 0",
    margin: "0",
  },
};

export default EllipseComponentStyle;
