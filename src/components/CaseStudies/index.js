import {
  MainWrapper,
  ContentWrapper,
  ProjectTOC,
  SupplementalProjTOC,
} from "./index.stitches";
import ProjectTop from "../elements/ProjectTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CaseStudyBlock from "./CaseStudyBlock";
import styled from "styled-components";

function CaseStudies() {
  const Divider = styled.div({
    borderTop: "1px solid #006894",
  });

  return (
    <MainWrapper>
      <ContentWrapper>
        <ProjectTop
          hed="Digital Design: Case Studies"
          overview="Throughout my career, I have grown comfortable with balancing various responsibilties: front-end developer, UX designer and project manager to name just a few. For select projects, here are case studies that go into more detail about my roles and design processes."
        />
        <ProjectTOC>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              gap: "3rem",
            }}
          >
            <CaseStudyBlock
              link={"/yip-2025"}
              caseHed={
                "Redesigning an annual package with a mobile-first photo feature"
              }
              timeline={"November - December 2025"}
              role={"Development, UX Design, Collaboration"}
              projName={"oldestrestos.jpg"}
            />
            <Divider />
            <CaseStudyBlock
              link={"/vets-series"}
              caseHed={
                "Increasing video engagement and creating a robust design system"
              }
              timeline={"March - November 2025"}
              role={
                "Development, UX Design, Series Design, Figma, Project Management, Collaboration"
              }
              projName={"vets.jpg"}
            />
            <Divider />

            <CaseStudyBlock
              link={"/policy-pages"}
              caseHed={
                "Organizing information for the 2024 Election Policy Pages"
              }
              timeline={"July - November 2023"}
              role={"UX Design, Figma, Development, Collaboration"}
              projName={"policy-pages.jpg"}
            />
            <Divider />
          </div>
        </ProjectTOC>

        <SupplementalProjTOC>
          <h4>Project Walkthroughs</h4>
          <ul>
            <li>
              <Link to="/oldest-restos">
                Leading development in a design collaboration for the{" "}
                <span>Oldest Restaurants</span> package{" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
            {/* <li>
              <Link to="/apple-news">
                Converting digital stories to be compatible with the <span>Apple News</span> platform{" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
            <li>
              <Link to="/dr-interactive">
                Creating a strong topper visual for the <span>Death Row</span>{" "}
                investigation
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
            <li>
              <Link to="/shifting-frontiers">
                Utilizing as many photographs as possible for the{" "}
                <span>Shifting Frontiers</span> photo essay
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
            <li>
              <Link to="/pills-interactive">
                Balancing sensitivity with strong visuals for this moving piece
                about <span>Abortion Pills</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li> */}
          </ul>
        </SupplementalProjTOC>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default CaseStudies;
