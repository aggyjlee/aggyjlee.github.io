import { styled } from "@stitches/react";

export const MainWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

export const ContentWrapper = styled("div", {
  "@media screen and (min-width: 768px)": {
    margin: "6rem",
    width: "calc(100% - 12rem)",
  },
  "@media screen and (max-width: 767px)": {
    width: "calc(100% - 2rem)",
    margin: "4rem",
  },
});

export const FrontHalfWrapper = styled("div", {
  h1: {
    "@media screen and (max-width: 400px)": { maxWidth: "20rem" },
  },
});

export const AboutTextWrapper = styled("div", {
  // border: "2px solid red",
  marginTop: "2rem",
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "4rem",
  "> div:nth-child(1)": {
    gridColumn: "1 / span 2",
  },
  "> div:nth-child(3)": {
    gridColumn: "5 / span 1",
  },
  "@media screen and (max-width: 767px)": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});

export const AboutMeText = styled("div", {
  fontFamily: "Helvetica Neue",
  gridColumn: "3 / span 2",
  "> div": {
    marginBottom: "1rem",
    a: {
      color: "#006894",
      fontWeight: "bold",
    },
    "a:hover": {
      color: "#4f7c8f",
    },
  },
  svg: {
    transform: "rotate(-0.12turn)",
    fill: "#006894",
    path: {
      fill: "#006894",
    },
  },
});

export const PhotoFrame = styled("div", {
  // border: "2px solid black",
  // borderRadius: "6rem",
  img: {
    borderRadius: "1rem",
    width: "100%",
    height: "auto",
  },
  "@media screen and (max-width: 767px)": {
    marginBottom: "0.5rem",
  },
});

export const AboutMod = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-end",
  span: {
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  div: {
    marginBottom: "1rem",
  },
});

export const ModNote = styled("div", {
  span: {
    fontWeight: "bold",
  },
});

export const ThirdColWrapper = styled("div", {
  fontFamily: "Helvetica Neue",
  color: "#006894",
  "@media screen and (min-width: 768px)": {
    display: "grid",
    paddingLeft: "1.5rem",
  },
  "@media screen and (max-width: 767px)": {
    // marginTop: '1rem',
    "& div:nth-child(2)": {
      // border: '2px solid blue',
      div: {
        marginBottom: "0 !important",
      },
    },
  },
});

export const ExpWrapper = styled("div", {
  border: "2px solid pink",
  marginTop: "5rem",
  display: "grid",
  gridTemplateColumns: "65% 25%",
  gap: "10%",
});

export const FirstHalf = styled("div", {});

export const Hed = styled("div", {
  fontSize: "45px",
  margin: "0",
});
