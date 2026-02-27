import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Button({ link, buttonCTA, color, border, textColor, icon, hoverColor, hoverText}) {
  const ButtonWrapper = styled.div({
    width: "fit-content",
    // border: '2px solid red',
    a: {
    textDecoration: 'none',
  }, 
  });

  const Button = styled.div({
    backgroundColor: color || "#006894",
    border: border || '',
    color:  textColor || "#fff",
    width: "fit-content",
    padding: "0.4rem 0.75rem 0.4rem 0.75rem",
    borderRadius: "1.5rem",
    display: "flex",
    p: {
      fontFamily: "Helvetica Neue",
      fontWeight: "bold",
      fontSize: "12px",
      color: textColor || "#fff",
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
    
    '&:hover': {
      backgroundColor: '#4f7c8f',
      p: {
      color: hoverText || ''

      }
    }
  });

  return (
    <ButtonWrapper>
      <a target="_blank" href={`${link}`}>
        <Button>
          <p>{buttonCTA || 'View story'}</p>
          {icon != 'noIcon' && <FontAwesomeIcon icon={faArrowRight} />}
        </Button>
      </a>
    </ButtonWrapper>
  );
}

export default Button;
