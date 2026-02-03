import { styled } from "@stitches/react";

export const MainWrapper = styled("div", {
  //   border: "2px solid blue",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

export const ContentWrapper = styled("div", {
  //   border: "2px solid pink",
  width: "calc(100% - 12rem)",
  height: "100%",
  margin: "6rem",
});

export const ProjectModule = styled("div", {
  //   border: "2px solid red",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "40% 60%",
  marginBottom: "3rem",
});

export const Image = styled("div", {
  //   border: "2px solid blue",
  borderRadius: "0.25rem",
  width: "auto",
  img: {
    height: "100%",
    width: "100%",
    borderRadius: "0.25rem",
    filter: "drop-shadow(0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.05))",
  },
});

export const ProjectContentWrapper = styled("div", {
  marginLeft: "3rem",
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
  },
});

export const Button = styled("div", {
  backgroundColor: "#006894",
  color: "#fff",
  width: "fit-content",
  padding: "0.1rem 0.75rem 0.1rem 0.75rem",
  borderRadius: "1.5rem",
  display: "flex",
  p: {
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    fontSize: "12px",
    color: "#fff",
    lineHeight: "0",
  },
  svg: {
    position: "relative",
    top: "4px",
    marginLeft: "0.25rem",
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
