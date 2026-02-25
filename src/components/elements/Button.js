import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Button({ link }) {
  const ButtonWrapper = styled.div({
    width: "fit-content",
    // border: '2px solid red',
    a: {
    textDecoration: 'none',
  }, 
  });

  const Button = styled.div({
    backgroundColor: "#006894",
    color: "#fff",
    width: "fit-content",
    padding: "0.4rem 0.75rem 0.4rem 0.75rem",
    borderRadius: "1.5rem",
    display: "flex",
    p: {
      fontFamily: "Helvetica Neue",
      fontWeight: "bold",
      fontSize: "12px",
      color: "#fff",
      marginBottom: "0",
      marginTop: "0",
    //   lineHeight: "0",
    },
    svg: {
      position: "relative",
    //   top: "4px",
      marginLeft: "0.25rem",
    },
    "@media screen and (max-width: 767px)": {
      marginBottom: "1.5rem",
    },
  });
  return (
    <ButtonWrapper>
      <a target="_blank" href={`${link}`}>
        <Button>
          <p>Link to story</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </a>
    </ButtonWrapper>
  );
}

export default Button;
