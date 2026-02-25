import {
  MainWrapper,
  ContentWrapper,
  TopWrapper,
  ProjectTOC
} from "./index.stitches";
import ProjectTop from "../elements/ProjectTop";

function CaseStudies() {
  return (
    <MainWrapper>
        <ContentWrapper>
          <ProjectTop hed="Case Studies" overview="Throughout my career, I have grown comfortable with simultanously balancing various responsibilties: front-end developer, UX designer and project manager – to name just a few." />
        <ProjectTOC>
            <div>
                <ul>Year In Photos 2025</ul>
                <ul>Veterans Inc.</ul>
                <ul>2024 Policy Pages</ul>
                <ul>Parking</ul>
                <ul>Project Walkthrus (Figma mockups, screenrecordings)</ul>
                    <div>
                        <ul>Oldest Restos</ul>
                        <ul>Death Row</ul>
                        <ul>Shifting Frontiers</ul>
                        <ul>Abortion Pills</ul>
                    </div>
            </div>
        </ProjectTOC>
        </ContentWrapper>
    </MainWrapper>
  );
}

export default CaseStudies;
