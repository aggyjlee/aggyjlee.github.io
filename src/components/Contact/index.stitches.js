import { styled } from "@stitches/react";

export const ContentWrapper = styled("div", {
  "@media screen and (min-width: 768px)": {
    margin: "6rem",
    width: "calc(100% - 12rem)",
    height: "60svh",
  },
  "@media screen and (max-width: 767px)": {
    margin: "4rem",
    height: "60svh",
    width: "calc(100% - 2rem)",
  },

//   border: '2px solid red',
  h3: {
    color: "#006894",
    paddingTop: "0.25rem",
    fontSize: "40px",
    margin: 0,
    paddingBottom: "1rem",
    fontWeight: "normal",
    "@media screen and (max-width: 767px)": {
      fontSize: "25px",
    },
  },
  div: {
    fontFamily: "Helvetica Neue",
  },
  ul: {
    fontFamily: "Helvetica Neue",
    // border: '2px solid blue',
    paddingLeft: "1rem",
    li: {
      marginBottom: "0.5rem",
      a: {
        fontWeight: 'bold',
        color: "#006894",
      },
    },
  },
});
