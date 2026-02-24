import {
  MainWrapper,
  ContentWrapper,
  TopWrapper,
  ProjectTOC
} from "./index.stitches";

function CaseStudies() {
  return (
    <MainWrapper>
        <ContentWrapper>
        <TopWrapper>
            <h3>Case Studies</h3>
            <p>
                Throughout my career, I have grown comfortable with simultanously balancing various responsibilties: front-end developer, UX designer and project manager – to name just a few.
                Here are select projects that go into more detail about my roles in the project's success and my design processes.
            </p>
        </TopWrapper>
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
