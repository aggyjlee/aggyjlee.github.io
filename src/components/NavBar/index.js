import { StickyWrapper, MainWrapper, ContentWrapper, LinkWrapper } from "./index.stitches";
import { Link } from 'react-router-dom'

const navArray = [
  ["work", "/#project"],
  ["about", "/about"],
];

function NavBar() {
  return (
    <nav>
    <StickyWrapper>
      <MainWrapper>
        <ContentWrapper>

           <LinkWrapper>
            {navArray.map((item, i) => {
                return (
                    <div key={i}>
                      <Link to={`${item[1]}`}>{item[0]}</Link>
                        {/* <a href={item[1]}>{item[0]}</a> */}
                    </div>
                )
            })}
            <div><a href={'/AgnesJLee_Resume_2026.pdf'} target="_blank">resume</a> </div>
            </LinkWrapper>
        </ContentWrapper>
      </MainWrapper>
    </StickyWrapper>
    </nav>
  );
}

export default NavBar;
