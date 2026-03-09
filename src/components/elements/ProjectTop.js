import styled from "styled-components";
import Button from "./Button";

function ProjectTop({
  hed,
  overview,
  date,
  role,
  button,
  link,
  marginBottom,
  hedWidth,
  team,
}) {
  const TopWrapper = styled.div({
    // border: '2px solid red',
    display: "grid",
    gridTemplateColumns: "70% 30%",
    "& a": {
      color: "#006894",
    },
    "& a:hover": {
      color: "#4f7c8f",
    },
    h3: {
      color: "#006894",
      fontSize: "40px",
      margin: 0,
      fontWeight: "normal",
      // marginBottom: "0.5rem",
      "@media screen and (max-width: 767px)": {
        fontSize: "25px",
      },
    },
    "> p:nth-child(2)": {
      fontFamily: "Helvetica Neue",
      // marginTop:'0'
    },
    "> div": {
      p: {
        fontFamily: "Helvetica Neue",
      },
      "> p": {
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
      },
      "> div": { marginTop: "1rem" },
    },
    "div:nth-child(1)": {
      "& p:nth-child(2)": {
        fontWeight: "bold",
      },
    },
    "@media screen and (max-width: 767px)": {
      display: "block",
    },
  });

  const TopPara = styled.p({
  });

  const RightDiv = styled.div({
    'p:nth-child(2)': {
      paddingTop: '1rem',
    }
  });

  return (
    <TopWrapper style={{ marginBottom: `${marginBottom || "4rem"}` }}>
      <div>
        <h3 style={{ maxWidth: `${hedWidth || ""}` }}>{hed}</h3>
        <p>{date}</p>
        <p>{role}</p>
        {button ? <Button link={link} /> : ""}
      </div>
      <RightDiv>
        <TopPara dangerouslySetInnerHTML={{ __html: overview }} />
        {team && <TopPara dangerouslySetInnerHTML={{ __html: team }} />}
      </RightDiv>
    </TopWrapper>
  );
}

export default ProjectTop;
