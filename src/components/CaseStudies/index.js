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

function CaseStudies() {
  return (
    <MainWrapper>
      <ContentWrapper>
        <ProjectTop
          hed="Case Studies"
          overview="Throughout my career, I have grown comfortable with simultanously balancing various responsibilties: front-end developer, UX designer and project manager – to name just a few. For select projects, here are case studies that go into more detail about my roles and design processes."
        />
        {/* <ProjectTOC>
          <div>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "4rem",
              }}
            >


              <li>
                <Link to="/yip-2025">
                  <span>
                    Redesigning an annual photo story with a mobile-first photo
                    feature |
                  </span>{" "}
                  Year In Photos 2025 <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <div
                  style={{
                    border: "2px solid pink",
                    height: "300px",
                    width: "100%",
                    borderRadius: "1rem",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                ></div>
                Role: sdjksjdks Timeline: nsdjnsjdns
              </li>
              <li>
                <Link to="/series-vets">
                  <span>
                    Increasing video engagement and creating a robust design
                    system for a story series |
                  </span>{" "}
                  Veterans Inc. <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <div
                  style={{
                    border: "2px solid pink",
                    height: "300px",
                    width: "100%",
                    borderRadius: "1rem",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                ></div>
                Role: sdjksjdks Timeline: nsdjnsjdns
              </li>
              <li>
                <Link to="/2024-policy-pages">
                  <span>
                    Organizing information for election policy pages |
                  </span>{" "}
                  2024 Presidential Election{" "}
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <div
                  style={{
                    border: "2px solid pink",
                    height: "300px",
                    width: "100%",
                    borderRadius: "1rem",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                ></div>
                Role: sdjksjdks Timeline: nsdjnsjdns
              </li>
              <li>
                <Link to="/parking-ux">
                  <span>
                    {" "}
                    Improving the parking experience in major cities |
                  </span>{" "}
                  Northwestern Bay Area Immersion Program{" "}
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <div
                  style={{
                    border: "2px solid pink",
                    height: "300px",
                    width: "100%",
                    borderRadius: "1rem",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                ></div>
                Role: sdjksjdks Timeline: nsdjnsjdns
              </li>
            </ul>
          </div>
        </ProjectTOC> */}

        <SupplementalProjTOC>
          {/* <h4>Project Walkthroughs</h4> */}
          <ul>
            <li>
              <Link to="/oldest-restos">
                Leading development in a design collaboration for the{" "}
                <span>Oldest Restaurants</span> package{" "}
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
            </li>
          </ul>
        </SupplementalProjTOC>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default CaseStudies;
