import { styled } from "@stitches/react";

export const MainWrapper = styled("div", {
//   border: "2px solid red",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: '100%'
});

export const ContentWrapper = styled("div", {
//   border: "2px solid purple",
  maxWidth: "42rem",
});

export const HedWrapper = styled("div", {
  display: "flex",
//   border: "2px solid pink",
  marginBottom: '1.5rem'
});

export const PhotoFrame = styled("div", {
//   border: "2px solid black",
  width: "90px",
  height: "90px",
  marginRight: "1rem",
  img: {
    width: '100%',
    height: '100%'
  }
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
});

export const Subheadline = styled("h2", {
//   border: "2px solid blue",
  fontWeight: "normal",
  fontSize: "45px",
  margin: "0",
});

export const ScrollCTA = styled("div", {
//   border: "2px solid blue",
  position: 'absolute',
  top: 'auto',
  bottom: '0',
  width: '100%',
  textAlign: 'center',
  fontFamily: 'Helvetica Neue',
  fontSize: '1rem',
  marginBottom: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  'svg': {
    paddingTop: '0.5rem'
  }
});
