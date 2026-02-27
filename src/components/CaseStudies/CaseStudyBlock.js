import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "../elements/Button";
import styled from "styled-components";

function CaseStudyBlock({ link, caseHed, timeline, role, projName }) {
  const BlockWrapper = styled.div({
    // border: '2px solid red',

    a: {
      textDecoration: "none",
    },
    "@media only screen and (min-width: 768px)": {
      display: "grid",
      gridTemplateColumns: "40% 40%",
      gap: "20%",
    },
    "@media only screen and (max-width: 767px)": {
      display: "flex",
      flexDirection: 'column-reverse',
      gap: "1.5rem",
    },
  });

  const LeftContent = styled.div({
    // border: "2px solid purple",
    p: {
      fontFamily: "Helvetica Neue",
      margin: "0",
      color: "#000",
      marginTop: "0.5rem",
    },
    "p:nth-child(2)": {
      fontWeight: "bold",
    },
    "p:nth-child(3)": {
      marginBottom: "1rem",
    },
    "@media only screen and (max-width: 768px)": {
      height: "fit-content",
    },
  });

  const ImageContainer = styled.div({
  });

  const CaseHed = styled.h3({
    color: "#006894",
    fontSize: "25px",
    margin: 0,
    fontWeight: "normal",
    // marginBottom: "0.5rem",
    "@media screen and (max-width: 767px)": {
      fontSize: "25px",
    },
  });

  return (
    <BlockWrapper>
      <div>
        {/* <Link to={`${link}`}> */}
        <LeftContent>
          <CaseHed style={{}}>{caseHed}</CaseHed> <p>{timeline}</p>
          <p>{role}</p>
          <p style={{ fontStyle: "italic" }}>Work in progress.. coming soon!</p>
          {/* <Button buttonCTA={"View case study"} link={`${link}`} /> */}
        </LeftContent>
        {/* </Link> */}
      </div>
      {/* <a href={`/#${link}`}> */}
      <ImageContainer>
        <img
          src={`/mocks/${projName}`}
          alt={"hi"}
          style={{
            width: "100%",
            height: "auto",
            // border: '2px solid red',
            borderRadius: "0.25rem",
            filter: "drop-shadow(0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.05))",
          }}
        />
      </ImageContainer>
      {/* </a> */}
    </BlockWrapper>
  );
}

export default CaseStudyBlock;
