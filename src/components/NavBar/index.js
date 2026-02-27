import { React, useState } from "react";
import {
  StickyWrapper,
  MainWrapper,
  ContentWrapper,
  LinkWrapper,
  PhotoFrame,
  MobileLinkWrapper,
  MobileLinks
} from "./index.stitches";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const navArray = [
  ["case studies", "/case-studies"],
  // ["work", "/#project"],
  ["about", "/about"],
  ["contact", "/contact"],
];

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const DropdownBox = styled.div({});

  return (
    <nav>
      <StickyWrapper>
        <MainWrapper>
          <Link to={"/"}>
            <PhotoFrame>
              <img
                src="/stamp.png"
                alt="aggy-dojang"
                className="stamp-rotation"
                style={{zIndex: '2'}}
              />
            </PhotoFrame>
          </Link>
          {/* <div style={{ display: isMobileMenuOpen ? 'block' : 'none', backgroundColor: "#bac7f6aa", height: "100vh", position: 'absolute', width: '100%' }}>

          </div> */}

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

            <MobileLinkWrapper>
              <MobileLinks style={{display: isMobileMenuOpen ? 'flex' : 'none'}}>
              {navArray.map((item, i) => {
                return (
                  <div key={i}>
                    <Link to={`${item[1]}`}>{item[0]}</Link>
                    {/* <a href={item[1]}>{item[0]}</a> */}
                  </div>
                );
              })}
              </MobileLinks>
              <div>
                <FontAwesomeIcon
                  icon={faBars}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </div>
            </MobileLinkWrapper>
          </ContentWrapper>
        </MainWrapper>
      </StickyWrapper>
    </nav>
  );
}

export default NavBar;
