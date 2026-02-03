import { StickyWrapper, MainWrapper, ContentWrapper, LinkWrapper } from "./index.stitches";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const navArray = [
  ["work", "/#project"],
  // ["about", "/about"],
  ["resume", "/AgnesJLee_Resume_2026.pdf"],
];

function NavBar() {
  return (
    <StickyWrapper>
      <MainWrapper>
        <ContentWrapper>

           <LinkWrapper>
            {navArray.map((item, i) => {
                return (
                    <div key={i}>
                        <a href={item[1]}>{item[0]}</a>
                    </div>
                )
            })}
            </LinkWrapper>
        </ContentWrapper>
      </MainWrapper>
    </StickyWrapper>
  );
}

export default NavBar;
