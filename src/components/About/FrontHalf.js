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
  "For the past four years, I worked as a News Designer at The Washington Post. There, I worked both on print and digital, in addition to a sprinkle of illustration and art direction. I have designed for all daily sections of the newspaper, which include A Section, Style and Metro, and I also consistenly design the front page (A1).",
  "With my experience in a newsroom, I am comfortable working across teams and under tight deadlines in a fast-paced environment. I regularly collaborate with copy editors, assignment editors, photo editors, reporters, graphics and illustrators to present designs and assist with creating an efficient workflow for long-term projects.",
  "Outside of work, you can find me tutoring, crocheting, trying out recipes, grocery shopping, exploring new spots in DC and Northern Virginia and carrying around my iPad.",
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
                {/* <span>Current faves:</span> */}
                <div>
                  The stamp logo for my website is a play on the "참 잘했어요 (Good Job)!" stamp used in Korean elementary schools.
                  Make sure to click the projects that have this stamp to learn more about what gave it the stamp of approval!
                  {/* {aboutModText.map((item, i) => {
                    return <div key={i}>{item}</div>;
                  })} */}
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
