import {
  MainWrapper,
  ContentWrapper,
  TopWrapper,
  ContentBlock,
} from "../Print/index.stitches";
import ProjectTop from "../elements/ProjectTop";
import styled from "styled-components";


function Illos() {
  const illos = [
    "illo1.jpg",
    "illo2.jpg",
    "illo3.jpg",
    "illo4.png",
    "illo5.jpg",
    "illo6.jpg",
  ];

  const brights = [
    "bright1",
    "bright2",
    "bright3",
    "bright4",
    "bright5",
    "bright6",
    "bright7",
    "bright8",
    "bright9",

  ];

  const SecondIlloWrapper = styled.div({
    // border: '2px solid red',
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: '1rem',
    marginTop: '1rem',
    '@media only screen and (max-width: 767px)': {
          gridTemplateColumns: "repeat(3, 1fr)",

    }
  });

  return (
    <MainWrapper>
      <ContentWrapper>
        <ProjectTop
          hed="Illustration"
          overview="I have experience creating photo illustrations, ranging from editorial illustrations to quick turn illustrations for the Washington Post Brights app. I've also assisted with art direction for digital projects, as shown in <a href='https://www.washingtonpost.com/investigations/interactive/2025/veterans-affairs-disability-claims-fraud/'>this topper illustration</a> and <a href='https://www.washingtonpost.com/health/interactive/2023/stress-chronic-illness-aging/'> these animated illustrations</a>."
        />
        <ContentBlock>
          {illos.map((item, i) => {
            return (
              <img
                src={`/illos/${item}`}
                alt="illo"
                key={i}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            );
          })}
        </ContentBlock>
        <SecondIlloWrapper>
          {brights.map((item, i) => {
            return (
              <img
                src={`/illos/bright${i+1}.jpg`}
                alt="bright thumbnail"
                key={i}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            );
          })}
        </SecondIlloWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default Illos;
