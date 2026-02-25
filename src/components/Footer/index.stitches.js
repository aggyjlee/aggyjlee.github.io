import { styled } from "@stitches/react";


export const MainWrapper = styled("div", {
  borderTop: "1px solid #006894",
  height: "100%",
  margin: "auto",
  "@media screen and (min-width: 768px)": {
  width: "calc(100% - 12rem)",
  },
  "@media screen and (max-width: 767px)": {
  width: "calc(100% - 2rem)",
  }
});

export const ContentWrapper = styled("div", {
  marginTop: "1rem",
  marginBottom: "2rem",
  display: "flex",
  justifyContent: "space-between",
  p: {
    // textTransform: "uppercase",
    fontFamily: "Helvetica Neue",
  },
  "@media screen and (max-width: 767px)": {
  display: 'block',
  textAlign: 'center'
  }
});

export const LinkWrapper = styled("div", {
  display: "flex",
  gap: "3rem",
  alignItems:"center",
  a: {
    fontFamily: "Helvetica Neue",
    textTransform: "uppercase",
    color: '#000',
    letterSpacing: '1px',
    "&:hover": {
      color: '#006894'
    }
  },
   "@media screen and (max-width: 767px)": {
    display: 'block',
    justifyContent: 'space-between'
   }
});
