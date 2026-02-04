import {
  MainWrapper,
  ContentWrapper,
  ExpWrapper,
  FirstHalf,
  Hed
} from "./index.stitches";
import { Headline } from "../Topper/index.stitches";
import FrontHalf from './FrontHalf'

function About() {
  return (
    <div>
      <MainWrapper>
        <ContentWrapper>
          <FrontHalf />

          {/* <ExpWrapper>
            <FirstHalf>
            <Hed>Work Experience</Hed>
            </FirstHalf>
          </ExpWrapper> */}
        </ContentWrapper>
      </MainWrapper>
    </div>
  );
}

export default About;
