import { styled } from "@stitches/react";

export const StickyWrapper = styled("div", {
  position: "sticky",
  top: "0",
  zIndex: "1",
  backgroundColor: "white",
});

export const MainWrapper = styled("div", {});

export const PhotoFrame = styled("div", {
  paddingLeft: "2rem",
  "@media screen and (max-width: 767px)": {
    paddingLeft: "1rem",
  },

  img: {
    width: "75px",
    height: "auto",
    position: "absolute",
    top: "1rem",
    transform: "rotate(-20deg)",
    "@media screen and (max-width: 767px)":{
      width: "70px",
      top: '1.25rem'
      }
  },
});

export const ContentWrapper = styled("div", {
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
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  "@media screen and (max-width: 767px)": {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    height: '60px'
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
  "@media screen and (max-width: 767px)": {
    display: "none",
  },
});

export const MobileLinkWrapper = styled("div", {
  display: "flex",
  height: "100%",
  alignItems:'center',
  justifyContent: 'center',
  gap: '0.5rem',
  "@media screen and (min-width: 768px)": {
    display: "none",
  },
});

export const MobileLinks = styled("div", {
  display: "flex",
  height: "100%",
  margin: "auto",
    alignItems:'center',
  justifyContent: 'center',
  a: {
    fontFamily: "Helvetica Neue",
    textTransform: "lowercase",
    color: "#000",
    textDecoration: "none",
    letterSpacing: "1px",
    fontSize: "14px",
    // border: "2px solid blue",
    padding: "0.5rem",
    "&:hover": {
      color: "#006894",
    },
  },
});
