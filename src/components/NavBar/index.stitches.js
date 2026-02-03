import { styled } from "@stitches/react";

export const StickyWrapper = styled("div", {
  position: "sticky",
  top: "0",
  zIndex: "1",
  backgroundColor: 'white'
});

export const MainWrapper = styled("div", {});

export const ContentWrapper = styled("div", {
  // backgroundColor: 'pink',
  paddingTop: "1rem",
  paddingBottom: "1rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  display: "flex",
  justifyContent: "flex-end",

  //   justifyContent: "space-between",
  borderBottom: "0.5px solid black",
  p: {
    textTransform: "capitalize",
    fontFamily: "Helvetica Neue",
  },
});

export const LinkWrapper = styled("div", {
  display: "flex",
  gap: "3rem",
  a: {
    fontFamily: "Helvetica Neue",
    textTransform: "lowercase",
    color: "#000",
    textDecoration: "none",
    letterSpacing: "1px",
    "&:hover": {
      color: "#006894",
    },
  },
});
