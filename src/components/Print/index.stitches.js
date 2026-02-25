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
  // border: "2px solid pink",

  "@media screen and (min-width: 768px)": {
    margin: "6rem",
    width: "calc(100% - 12rem)",
  },
  "@media screen and (max-width: 767px)": {
    width: "calc(100% - 2rem)",
    margin: '4rem'
  },
});


export const ContentBlock = styled("div", {
  // border: '2px solid green',
  height: 'auto',
  // marginTop: '1.5rem',
  display: 'grid',
  gap: '1rem',
  // flexDirection: 'column',
  gridTemplateColumns: 'repeat(3, 1fr)',
  "@media screen and (max-width: 767px)": {
    gridTemplateColumns: 'repeat(2, 1fr)'
  }
})