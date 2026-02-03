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


function Topper() {
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
            I am currently a D.C.-based Designer at The Washington Post, where I
            design and develop interactive stories.
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
