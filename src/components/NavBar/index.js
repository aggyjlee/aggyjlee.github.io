import {
  StickyWrapper,
  MainWrapper,
  ContentWrapper,
  LinkWrapper,
  PhotoFrame,
} from "./index.stitches";
import { Link } from "react-router-dom";

const navArray = [
  ["case studies", "/case-studies"],
    // ["work", "/#project"],
  ["about", "/about"],
  ["contact", "/contact"],
];

function NavBar() {
  return (
    <nav>
      <StickyWrapper>
        <MainWrapper>
          <Link to={"/"}>
            <PhotoFrame>
              <img src="/stamp.png" alt="aggy-dojang" className='stamp-rotation' />
            </PhotoFrame>
          </Link>

          <ContentWrapper>
            <LinkWrapper>
              {navArray.map((item, i) => {
                return (
                  <div key={i}>
                    <Link to={`${item[1]}`}>{item[0]}</Link>
                    {/* <a href={item[1]}>{item[0]}</a> */}
                  </div>
                );
              })}
              {/* <div><a href={'/AgnesJLee_Resume_2026.pdf'} target="_blank">resume</a> </div> */}
            </LinkWrapper>
          </ContentWrapper>
        </MainWrapper>
      </StickyWrapper>
    </nav>
  );
}

export default NavBar;
