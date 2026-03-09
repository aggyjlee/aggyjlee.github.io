import { styled } from "@stitches/react";

export const FlexWrapper = styled("div", {
  //   border: "2px solid blue",

  "@media only screen and (min-width: 767px)": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export const CaseStudyWrapper = styled("div", {
  //   border: "2px solid red",
  marginTop: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media only screen and (min-width: 768px)": {},
});

export const CSContentWrapper = styled("div", {
  //   border: "2px solid blue",
  maxWidth: "35rem",
  width: "100%",
  marginLeft: "1rem",
  marginRight: "1rem",
  "@media only screen and (min-width: 768px)": {},
});

export const SectionWrapper = styled("div", {
  //   border: "2px solid blue",
  marginBottom: "8rem",
  "@media only screen and (min-width: 768px)": {},
});

export const ProjChunkHed = styled("h4", {
  color: "#006894",
  fontWeight: "normal",
  fontSize: "25px",
  margin: "0",
  marginBottom: "1rem",
});

export const ProjChunkText = styled("p", {
  fontFamily: "Helvetica Neue",
  // border: "2px solid red",
  margin: "0",
  marginBottom: "1rem",
  b: {
    color: "#006894",
  },
  span: {
    fontWeight: "bold",
  },
  variants: {
    css: {
      blue: {
        color: "#006894",
      },
    },
  },
});

export const ParaWrapper = styled("div", {
  //   border: "2px solid blue",
      a: {
      color: "#006894",
      fontWeight: "bold",
    },
    "a:hover": {
      color: "#4f7c8f",
    },
  fontFamily: "Helvetica Neue",
  variants: {
    header: {
      true: {
        marginBottom: "4rem",
      },
    },
  },
  span: {
    fontWeight: "bold",
  },
  ul: {
    margin: "0",
    paddingLeft: "1rem",
    marginBottom: '1rem'
  },
  li: {
    '& p': {marginBottom: '0.25rem !important'}
  },
  "@media only screen and (min-width: 768px)": {},
});

export const ImgCaption = styled("p", {
  fontFamily: "Helvetica Neue",
  margin: "0",
  fontSize: "14px",
  color: "#111111",
  padding: "1.5rem 2rem 0.75rem 1.5rem",
});

export const EmojiWrapper = styled("div", {
  display: "flex",
  gap: "0.5rem",
  variants: {
    belowImage: {
      true: {
        marginTop: "0.5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      },
    },
  },
});

export const EmojiContainer = styled("span", {
  fontSize: "12px",
  margin: "0",
  padding: "0",
  lineHeight: "18px",
});
