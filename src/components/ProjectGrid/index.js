import {
  MainWrapper,
  ContentWrapper,
  ProjectModule,
  Image,
  ProjectContentWrapper,
  Button,
  Descriptor,
  OtherWrapper,
  ListWrapper,
} from "./index.stitches";
import data from "../../data/project.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ProjectGrid() {
  return (
    <MainWrapper id={'project'}>
      <ContentWrapper>
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
                <a target="_blank" href={`${item[1]}`}>
                  <Button onClick={() => console.log("go to link")}>
                    <p>
                        Link to story

                    </p>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </a>
                <Descriptor>
                  <span>{item[2] + " |"}</span>
                  {" " + item[3]}
                </Descriptor>
              </ProjectContentWrapper>
            </ProjectModule>
          );
        })}
        {/* <OtherWrapper>
          <h3>Other Work</h3>
          <ListWrapper>
            <div>
              <span>Print Design |</span> Washington Post
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div>
              <span>Art Direction & Illustration |</span> Washington Post,
              Stitch Magazine
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div>
              <span>Media Design |</span> Video Producing & Editing, Social
              Media Design, Mobile App Protyping
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </ListWrapper>
        </OtherWrapper> */}
      </ContentWrapper>
    </MainWrapper>
  );
}

export default ProjectGrid;
