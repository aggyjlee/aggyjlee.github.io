import {
  MainWrapper,
  ContentWrapper,
  ProjectModule,
  Image,
  ProjectContentWrapper,
  SecondaryButton,
  Descriptor,
  OtherWrapper,
  ListWrapper,
  ProjectMessage,
  Tooltip,
  TooltipText,
  ProjMsgDesktop,
} from "./index.stitches";
import Button from "../elements/Button";
import data from "../../data/project.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { CiCircleInfo } from "react-icons/ci";
import { Link } from "react-router-dom";

function ProjectGrid() {
  const isCaseStudy = (index) => {
    if (index == 0) {
      return "Read case study";
    } else if (index == 3) {
      return "Read case study";
    } else if (index == 1) {
      return "Learn more";
    } else if (index == 2) {
      return "Learn more";
    } else if (index == 4) {
      return "Learn more";
    } else if (index == 5) {
      return "Learn more";
    } else {
      return "";
    }
  };

  return (
    <MainWrapper id={"project"}>
      <ContentWrapper>
        <ProjectMessage>
          <h3>Selected Work</h3>
          <ProjMsgDesktop>
            <span>
              Whenever possible, gift links are provided. Getting a
              paywall?{" "}
            </span>
            <Tooltip>
              <FontAwesomeIcon icon={faInfoCircle} />
              <TooltipText>
                <p>Gift log-in credentials</p>
                <p>
                  user:<span> ajlportfolio2026@gmail.com</span>
                </p>
                <p>
                  pw: <span>viewmywork!</span>
                </p>
              </TooltipText>
            </Tooltip>
          </ProjMsgDesktop>
        </ProjectMessage>
        {data.map((item, i) => {
          return (
            <ProjectModule key={i}>
              <Image>
                <img src={`/thumbnails/${item[4]}`} alt="project thumbnail" />
              </Image>

              <ProjectContentWrapper>
                <p>
                  {i + 1}/{data.length}
                </p>
                <h3>{item[0]}</h3>

                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <Button link={item[1]} icon={true} />
                  {isCaseStudy(i) && (
                    <Button
                      link={`${item[5]}`}
                      color={"#fff"}
                      textColor={"#000"}
                      border={"1px solid #006894"}
                      hoverText={"#fff"}
                      hoverColor={"#006894"}
                      buttonCTA={`${isCaseStudy(i)}`}
                      icon={"noIcon"}
                    />
                  )}
                </div>

                <Descriptor>
                  <span>{item[2] + " |"}</span>
                  {" " + item[3]}
                </Descriptor>
              </ProjectContentWrapper>
              {/* <ProjectMessage><BsExclamationCircle /><p>When possible, gift links are provided.</p></ProjectMessage> */}
            </ProjectModule>
          );
        })}
        <OtherWrapper>
          <h3>Other Work</h3>
          <ListWrapper>
            <div>
              <Link to="/print">
                <span>Print Design |</span> Washington Post
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>

            <div>
              <Link to="/illos">
                <span>Illustration & Art Direction |</span> Washington Post
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
            {/* <div>
              <span>Media Design |</span> Video Producing & Editing, Social
              Media Design, Mobile App Prototyping, Presentation Design
              <FontAwesomeIcon icon={faArrowRight} />
            </div> */}
          </ListWrapper>
        </OtherWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default ProjectGrid;
