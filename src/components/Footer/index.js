import { MainWrapper, ContentWrapper, LinkWrapper } from "./index.stitches";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const linkArray = [
    ["Github", "link"],
     ["Email", "link"],
      ["Linkedin", "link"]
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
                        <p>{item[0]}</p>
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
