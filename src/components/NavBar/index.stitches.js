import { styled } from "@stitches/react";

export const StickyWrapper = styled("div", {
  position: "sticky",
  top: "0",
  zIndex: "1",
  backgroundColor: "white",
});

export const MainWrapper = styled("div", {});

export const ContentWrapper = styled("div", {
  // backgroundColor: 'pink',
  paddingTop: "1rem",
  paddingBottom: "1rem",
  display: "flex",
  justifyContent: "flex-end",

  //   justifyContent: "space-between",
  borderBottom: "0.5px solid black",
  p: {
    textTransform: "capitalize",
    fontFamily: "Helvetica Neue",
  },
  "@media screen and (min-width: 768px)": {
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  "@media screen and (max-width: 767px)": {
    paddingLeft: "1rem",
    paddingRight: "1rem",
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
