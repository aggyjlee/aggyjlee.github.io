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
  },
});

export const ProjectMessage = styled("div", {
  marginBottom: "1.5rem",
  h3: {
    // paddingTop: "0.25rem",
    fontSize: "40px",
    margin: 0,
    // paddingBottom: "1rem",
    fontWeight: "normal",
  },

  p: {
    fontFamily: "Helvetica Neue",
  },

  svg: {
    fill: "#006894 !important",
    path: {
      fill: "#006894 !important",
    },
  },
  // gap: '0.5rem',
  // alignContent: 'baseline'
});

export const ProjMsgDesktop = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
  "> span": {
    fontFamily: "Helvetica Neue",

    // fontSize: "14px",
  },

  "@media screen and (max-width: 767px)": {
    // whiteSpace: "nowrap",
    display: "inline-block",
    // marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },

  // alignContent: 'baseline'
});

export const Tooltip = styled("div", {
  // border: "2px solid pink",
  cursor: "pointer",
  display: "inline-block",
  position: "relative",
  "> span": {
    visibility: "hidden",
    width: "220px",
    backgroundColor: "#006894",
    color: "#fff",
    // textAlign: "center",
    borderRadius: "6px",
    padding: "5px 10px",
    position: "absolute",
    zIndex: "1",
    fontFamily: "Helvetica Neue",
    fontSize: "14px",
    top: "-15px",
    marginLeft: "10px",
    p: {
      margin: 0,
      span: { fontWeight: "bold" },
    },
    "@media screen and (max-width: 767px)": {
      top: "100%",
      left: "-112px",
      marginTop: "10px",
      // marginLeft: '-25px',
    },
  },
  "&:hover span": {
    visibility: "visible",
  },
  "> span::after": {
    content: " ",
    top: "35%",
    right: "100%",
    position: "absolute",
    borderWidth: "5px",
    borderStyle: "solid",
    borderColor: "transparent #006894 transparent transparent",
    "@media screen and (max-width: 767px)": {
      top: '-10px',
      left: '45%',
  // left: '50%',
      borderColor: "transparent transparent #006894 transparent",

    }
  },
});

export const TooltipText = styled("span", {
  // border: "2px solid pink",
});

export const Project = styled("div", {
  border: "2px solid pink",
  height: "100%",

  "@media screen and (min-width: 768px)": {
    margin: "6rem",
    width: "calc(100% - 12rem)",
  },
  "@media screen and (max-width: 767px)": {
    width: "calc(100% - 2rem)",
  },
});

export const ProjectModule = styled("div", {
  //   border: "2px solid red",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "40% 60%",
  marginBottom: "3rem",
  "@media screen and (max-width: 767px)": {
    display: "flex",
    flexDirection: "column",
  },
});

export const Image = styled("div", {
  //   border: "2px solid blue",
  borderRadius: "0.25rem",
  width: "auto",
  img: {
    height: "auto",
    width: "100%",
    borderRadius: "0.25rem",
    filter: "drop-shadow(0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.05))",
  },
});

export const ProjectContentWrapper = styled("div", {
  // border: '2px solid red',
  display: "flex",
  flexDirection: "column",
  paddingTop: "0.25rem",
  "> p:nth-child(1)": {
    margin: 0,
    fontFamily: "Helvetica Neue",
    fontSize: "12px",
    color: "#989090",
  },
  h3: {
    paddingTop: "0.25rem",
    fontSize: "40px",
    margin: 0,
    paddingBottom: "1rem",
    fontWeight: "normal",
    "@media screen and (max-width: 767px)": {
      fontSize: "25px",
    },
  },
  a: {
    textDecoration: "none",
    width: "fit-content",
  },
  "@media screen and (min-width: 768px)": {
    marginLeft: "3rem",
  },
  "@media screen and (max-width: 767px)": {
    marginTop: "0.5rem",
  },
});

export const SecondaryButton = styled("div", {
  backgroundColor: "#fff",
  border: "0.5px solid #006894",
  color: "#000",
  width: "fit-content",
  padding: "0.4rem 0.75rem 0.4rem 0.75rem",
  borderRadius: "1.5rem",
  display: "flex",
  p: {
    fontFamily: "Helvetica Neue",
    // fontWeight: "bold",
    fontSize: "12px",
    color: "#000",
    marginTop: "0",
    marginBottom: "0",
  },
  svg: {
    position: "relative",
    // top: "4px",
    marginLeft: "0.25rem",
  },
  "@media screen and (max-width: 767px)": {
    marginBottom: "1.5rem",
  },
});

export const Descriptor = styled("div", {
  span: {
    fontWeight: "bold",
  },
  fontFamily: "Helvetica Neue",
  height: "100%",
  // display: 'flex',
  // flexDirection: 'row',
  alignContent: "flex-end",
  flexWrap: "wrap",
  paddingBottom: "0.25rem",
  "@media screen and (min-width: 768px) and (max-width: 1240px)": {
    paddingTop: "1rem",
  },
});

export const OtherWrapper = styled("div", {
  //   border: "2px solid blue",
  marginTop: "6rem",
  h3: {
    paddingTop: "0.25rem",
    fontSize: "40px",
    margin: 0,
    paddingBottom: "1rem",
    fontWeight: "normal",
  },
  "@media screen and (max-width: 767px)": {
    marginTop: "4rem",
    marginBottom: "2rem",
  },
  div: {
    a: {
      color: "black",
      "&:hover": {
        color: "#006894",
      },
    },
  },
});

export const ListWrapper = styled("div", {
  fontFamily: "Helvetica Neue",
  svg: {
    transform: "rotate(-0.12turn)",
    fill: "#006894",
    path: {
      fill: "#006894",
    },
  },
  div: { marginBottom: "0.5rem" },
  span: {
    fontWeight: "bold",
  },
});
