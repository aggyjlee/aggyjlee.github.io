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
  height: "100%",

  "@media screen and (min-width: 768px)": {
    margin: "6rem",
    width: "calc(100% - 12rem)",
  },
  "@media screen and (max-width: 767px)": {
    width: "calc(100% - 2rem)",
    margin: "4rem",
  },
    ul: {
    fontFamily: "Helvetica Neue",
    paddingLeft: '1rem',
      a: {
        color: '#000',

      },
              'a:hover': {
          color: '#006894'
        }
      
  },
  li: {
    marginBottom: "0.5rem",
      span: {
        fontWeight: "bold",
      },
    svg: {
      transform: "rotate(-0.12turn)",
      fill: "#006894",
      path: {
        fill: "#006894",
      },
    },
  },
});

export const ProjectTOC = styled("div", {
  // border: "2px solid green",
  // marginTop: '1.5rem',
});

export const SupplementalProjTOC = styled("div", {
  h4: {
    color: "#006894",
    fontWeight: "normal",
    fontSize: "25px",
    marginBottom: "0px",
  },
});
