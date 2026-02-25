import {
  MainWrapper,
} from "../About/index.stitches";
import {
  ContentWrapper,
} from "./index.stitches";

function Contact() {
  return (
    <MainWrapper>
      <ContentWrapper>
          <h3>Contact Me!</h3>
          <div>
            Want to get in touch? I'm currently open to new opportunities – feel free to reach out to connect or say hi!
          </div>
          <ul>
              <li>Email: <a href="mailto:agnesjihyunlee@gmail.com">agnesjihyunlee@gmail.com</a></li>
              <li>LinkedIn: <a href="https://linkedin.com/in/agnesjlee">Agnes Lee</a></li>
              <li>GitHub: <a href="https://github.com/aggyjlee">aggyjlee</a></li>
              <li>Twitter: <a href="https://twitter.com/aggyjlee">@aggyjlee</a></li>
          </ul>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default Contact;
