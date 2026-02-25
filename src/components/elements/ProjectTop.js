import styled from "styled-components";
import Button from "./Button";

function ProjectTop({ hed, overview, date, role, button, link, marginBottom, css }) {
  const TopWrapper = styled.div({
    // border: '2px solid red',
    display: "grid",
    gridTemplateColumns: "70% 30%",
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
      '> p': {
        marginTop:'0.5rem',
        marginBottom:'0.5rem'
      },
      '> div': {marginTop: '1rem'},
      'p:nth-child(2)': {
        fontWeight: "bold",
      },
    },
  });

  return (
    <TopWrapper style={{marginBottom: `${marginBottom || '4rem'}` }}>
      <div>
        <h3>{hed}</h3>
        <p>{date}</p>
        <p>{role}</p>
        {button ? <Button link={link} /> : ""}
      </div>
      <p>{overview}</p>
    </TopWrapper>
  );
}

export default ProjectTop;
