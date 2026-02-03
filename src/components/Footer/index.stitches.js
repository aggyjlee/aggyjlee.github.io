import { styled } from "@stitches/react";

export const MainWrapper = styled("div", {
  borderTop: "1px solid #006894",
  width: "calc(100% - 12rem)",
  height: "100%",
  margin: "auto",
});

export const ContentWrapper = styled("div", {
  marginTop: "1rem",
  marginBottom: "2rem",
  display: "flex",
  justifyContent: "space-between",
  p: {
    textTransform: "capitalize",
    fontFamily: "Helvetica Neue",
  },
});

export const LinkWrapper = styled("div", {
  display: "flex",
  gap: "3rem",
  p: {
    textTransform: "uppercase",
  },
});
