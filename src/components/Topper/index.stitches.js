import { styled } from "@stitches/react";

export const MainWrapper = styled("div", {
  //   border: "2px solid red",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

export const ContentWrapper = styled("div", {
  // border: "2px solid purple",
  maxWidth: "42rem",
  position: "relative",
  top: "-50px",
  "@media screen and (max-width: 767px)": {
    margin: "1rem",
  },
});

export const HedWrapper = styled("div", {

  // border: "2px solid pink",

  "@media screen and (min-width: 768px)": {
      display: "flex",
    // marginBottom: "1.5rem",
  },
});

export const PhotoFrame = styled("div", {
  // border: "2px solid black",
  alignSelf: "center",
  width: "15%",
  height: "100%",
  marginRight: "1rem",
  img: {
    width: "100%",
    height: "100%",
  },
  "@media screen and (max-width: 767px)": {
    width: "100%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    img: {
      width: "30%",
      height: "30%",
    },
  },
});

export const Headline = styled("h1", {
  //   border: "2px solid green",
  fontSize: "85px",
  fontStyle: "bold",
  fontWeight: 800,
  span: {
    fontWeight: 400,
  },
  margin: "0",
  "@media screen and (max-width: 767px)": {
    fontSize: "55px",
  },
});

export const Subheadline = styled("h2", {
  //   border: "2px solid blue",
  fontWeight: "normal",
  fontSize: "45px",
  margin: "0",
  a: {
    color: '#000',
    "&:hover": {
      color: '#006894',
      fontStyle: 'italic'
    }
  },
  "@media screen and (max-width: 767px)": {
    fontSize: "25px",
  },
});

export const ScrollCTA = styled("div", {
  //   border: "2px solid blue",
  a: {
    color: '#000',
    textDecoration: 'none',
  position: "absolute",
  top: "auto",
  bottom: "0",
  width: "100%",
  textAlign: "center",
  fontFamily: "Helvetica Neue",
  fontSize: "1rem",
  marginBottom: "3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  svg: {
    paddingTop: "0.5rem",
  },
  }
});
