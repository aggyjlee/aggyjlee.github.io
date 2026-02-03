import { MainWrapper, ContentWrapper, LinkWrapper } from "./index.stitches";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const linkArray = [
    ["Github", "https://github.com/aggyjlee"],
     ["Email", "mailto: agnesjihyunlee@gmail.com"],
      ["LinkedIn", "https://linkedin.com/in/agnesjlee"]
]

function Footer() {
  return (
    <footer>
      <MainWrapper>
        <ContentWrapper>
            <p>💙 Last Updated on Feb 2026</p>
            <LinkWrapper>
            {linkArray.map((item, i) => {
                return (
                    <div key={i}>
                        <a href={item[1]}>{item[0]}</a>
                    </div>
                )
            })}
            </LinkWrapper>
            </ContentWrapper>
      </MainWrapper>
    </footer>
  );
}

export default Footer;
