import {
  MainWrapper,
  ContentWrapper,
  AboutTextWrapper,
  AboutMeText,
  PhotoFrame,
  AboutMod,
  ModNote,
  ThirdColWrapper,
  ExpWrapper
} from "./index.stitches";
import { Headline } from "../Topper/index.stitches";

const aboutMeText = [
  "I am a digital designer who creates interactive experiences for both web and mobile platforms. I focus on creating design systems and features that best tell the individual story of each project while keeping user experience at the forefront.",
  "Since September 2022, I have been working as a News Designer at The Washington Post. Here, I have worked both on print and digital, in addition to a sprinkle of illustration and art direction. I have designed for all daily sections of the newspaper, which include A Section, Style and Metro, and I also consistenly design the front page (A1).",
  "With my experience in a newsroom, I am comfortable working across teams and tight deadlines in a fast-paced environment. I regularly collaborate with copy editors, assignment editors, photo editors, reporters, graphic reporters, illustrators and other designers, presenting my designs and assisting with creating an efficient workflow for long-term projects.",
  // "I always say I am a designer because I am someone who loves to solve problems – whether it is bug bashing or creating the best reader experience, I see design as the most effective way to convey your message and story.",
  "Outside of work, you can find me tutoring, crocheting, trying recipes, grocery shopping, exploring new spots in DC and Northern Virginia and carrying around my iPad.",
];

const aboutModText = [
  "PinkPantheress's Stateside remix with Zara Larsson",
  "The Dandelion latte from Soricha in Annandale",
  "A Thai Iced Tea (forever and always)",
  "Quick response times",
  "YouTube Premium",
  "Polymer clay",
];

function FrontHalf() {
  return (
    <div>

          <Headline>
            <span>Hi, I’m </span>Agnes Lee!
          </Headline>
          <AboutTextWrapper>
            <PhotoFrame>
              <img src="/aboutMe.jpg" alt="Photo of Agnes Lee" />
            </PhotoFrame>
            <AboutMeText>
              {aboutMeText.map((para, i) => {
                return <div key={i}>{para}</div>;
              })}
            </AboutMeText>
            <ThirdColWrapper>
              <AboutMod>
                <span>Current faves:</span>
                <div>
                  {aboutModText.map((item, i) => {
                    return <div key={i}>{item}</div>;
                  })}
                </div>
              </AboutMod>
              <ModNote>
                Open to freelance opportunities and contract work. Feel free to holler: <span>agnesjihyunlee@gmail.com</span>
              </ModNote>
            </ThirdColWrapper>
          </AboutTextWrapper>

    </div>
  );
}

export default FrontHalf;
