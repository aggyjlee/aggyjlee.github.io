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
import { Link } from 'react-router-dom'
import jump from 'jump.js'

const Topper = () => {
  return (
    <header>
      <MainWrapper>
        <ContentWrapper>
          <HedWrapper>
            {/* <PhotoFrame><img src="/stamp.png" alt="aggy-dojang" /></PhotoFrame> */}
            <Headline>
              <span>Hi, I’m</span> Agnes!
            </Headline>
          </HedWrapper>
          <Subheadline>
            I am a multidisciplinary designer with experience in <a href="/#project" onClick={() => {jump('#project')}}>front-end development</a>, digital design, <Link to='/print'>print design</Link> and <Link to='/illos'>illustration</Link>.
          </Subheadline>
        </ContentWrapper>
      </MainWrapper>
      <ScrollCTA onClick={() => {jump('#project')}}>
        <Link to='/#project'>
        selected work
        <FontAwesomeIcon icon={faArrowDown}/>
        </Link>
      </ScrollCTA>
    </header>
  );
}

export default Topper;
