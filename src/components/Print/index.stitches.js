import { styled } from "@stitches/react";

export const MainWrapper = styled("div", {
    // border: "2px solid blue",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

export const ContentWrapper = styled("div", {
border: "2px solid pink",
  height: "100vh",

  "@media screen and (min-width: 768px)": {
  margin: "6rem",
  width: "calc(100% - 12rem)",
  },
  '@media screen and (max-width: 767px)': {
      width: "calc(100% - 2rem)",
  }
});