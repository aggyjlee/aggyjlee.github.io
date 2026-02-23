import {
  ScrollCTA,
  MainWrapper,
  PhotoFrame,
  HedWrapper,
  Headline,
  Subheadline,
  ContentWrapper,
} from "./index.stitches";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


const Topper = () => {
  return (
    <header>
      <MainWrapper>
        <ContentWrapper>
          <HedWrapper>
            <PhotoFrame><img src="/stamp.png" alt="aggy-dojang" /></PhotoFrame>
            <Headline>
              <span>Hi, I’m</span> Agnes!
            </Headline>
          </HedWrapper>
          <Subheadline>
            I am a multidisciplinary designer with experience in front-end development and digital design.
          </Subheadline>
        </ContentWrapper>
      </MainWrapper>
      <ScrollCTA>
        selected work
        <FontAwesomeIcon icon={faArrowDown}/>
      </ScrollCTA>
    </header>
  );
}

export default Topper;
