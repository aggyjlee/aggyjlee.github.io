import {
  MainWrapper,
  ContentWrapper,
  TopWrapper,
  ContentBlock,
} from "../Print/index.stitches";
import {
  FlexWrapper,
  CaseStudyWrapper,
  CSContentWrapper,
  ProjChunkHed,
  ProjChunkText,
  SectionWrapper,
  ParaWrapper,
  ImgCaption,
  EmojiWrapper,
  EmojiContainer,
} from "./index.stitches";
import ProjectTop from "../elements/ProjectTop";
import ProjectMainVideo from "../elements/ProjectMainVideo";
import Image from "../elements/Image";
import Video from "../elements/Video";
import styled from "styled-components";

function Vets() {
  const ImageBox = styled.div({
    // border: "2px solid red",
    "@media only screen and (max-width: 767px)": {
      display: "grid",
      gap: "1rem",
      width: "100%",
    },

    width: "80%",
    display: "flex",
  });

  const SecondImageBox = styled.div({
    display: "grid",
    gap: "1rem",
    "@media only screen and (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr",

      "img:nth-child(1)": {
        gridColumn: "1/span 1",
      },
      "img:nth-child(2)": {
        gridColumn: "2/span 1",
      },
    },
  });

  const ThirdImageBox = styled.div({
    marginBottom: "1rem",
    "@media only screen and (min-width: 768px)": {
      display: "flex",
      gap: "1rem",
    },
  });

  const StackedBox = styled.div({});

  return (
    <MainWrapper>
      <ContentWrapper>
        <ProjectTop
          hed={
            "Increasing video engagement and creating a robust design system"
          }
          date={"March 2025 - November 2025"}
          role={
            "Development, UX Design, Series Design, Figma, Project Management, Collaboration"
          }
          button={true}
          link={"https://wapo.st/4sbMuKx"}
          overview={
            "This was a four-part investigative series that looked at fraud within a government agency. The reporting had been in the works for over two years, and countless FOIAs were submitted to receive social media posts and surveillance footage from court documents."
          }
          hedWidth={"30rem"}
          team={
            "<b>Team:</b> Designer/Developer (Agnes Lee), Designer/Art Director (Allison Mann), Video Editor, Design Editors, Graphics Reporter, Photo Editor, Project Editor, Data Reporter, Reporters, FOIA Director"
          }
        />

        <ProjectMainVideo
          src={
            "https://ajl-portfolio-2026.s3.us-east-2.amazonaws.com/vets+-+desktop+mockup.mp4"
          }
        />

        <CaseStudyWrapper>
          <CSContentWrapper>
            <SectionWrapper>
              <ProjChunkHed dangerouslySetInnerHTML={{ __html: "Problem" }} />
              <ProjChunkText
                dangerouslySetInnerHTML={{
                  __html:
                    "Many of the videos we received from the FOIA documents were short, low-quality videos taken from surveillance footage. We knew we wanted to implement these clips into the story since they clearly demonstrated the subjects’ fraudulent acts, but our metrics have regularly shown us that readers do not often click play on videos or stay to complete the video. ",
                }}
              />
              <EmojiWrapper>
                <EmojiContainer
                  dangerouslySetInnerHTML={{
                    __html: "🔍 ",
                  }}
                />

                <ProjChunkText
                  css={"blue"}
                  dangerouslySetInnerHTML={{
                    __html:
                      "How can we present videos so readers can see the breadth of fraud that was committed even if they don’t play the video?",
                  }}
                />
              </EmojiWrapper>
            </SectionWrapper>

            <SectionWrapper>
              <ProjChunkHed
                dangerouslySetInnerHTML={{ __html: "Solution Overview" }}
              />
              <ProjChunkText
                dangerouslySetInnerHTML={{
                  __html:
                    "An annotated video component that allows readers to see a thumbnail and annotation that describes the scene in the video.",
                }}
              />
              <SecondImageBox>
                <Image src={"./caseStudies/vets/mobilefinal-1.png"} />
                <Image src={"./caseStudies/vets/mobilefinal-2.png"} />
              </SecondImageBox>
            </SectionWrapper>

            <SectionWrapper>
              <ProjChunkHed dangerouslySetInnerHTML={{ __html: "Approach" }} />
              <ParaWrapper header={true}>
                <span>Existing Work:</span>
                <ProjChunkText
                  dangerouslySetInnerHTML={{
                    __html:
                      "At the Post, the template allows videos to be click-to-play or looping. For those that are click-to-play, a headline and description show by the play button. I thought <a href= “https://www.washingtonpost.com/business/interactive/2025/osha-workplace-deaths-safety-sawmill/” target=“_blank”>this Post story on workplace deaths</a> had a sleek solution for teeing up its videos of surveillance footage with an additional headline/subheadline treatment.",
                  }}
                />
                <StackedBox>
                  <div>
                    <ImgCaption>Click-to-play default video</ImgCaption>
                    <Image src={"./caseStudies/vets/existin1.png"} />
                  </div>
                  <div>
                    <ImgCaption>Looping default video</ImgCaption>
                    <Image src={"./caseStudies/vets/existin3.png"} />
                  </div>
                  <div>
                    <ImgCaption>Project-specific video treatment</ImgCaption>
                    <Image src={"./caseStudies/vets/existin2.png"} />
                  </div>
                </StackedBox>
              </ParaWrapper>

              <ParaWrapper header={true}>
                <span>Concepts:</span>
                <ProjChunkText
                  dangerouslySetInnerHTML={{
                    __html:
                      "Based on our research, we knew early on we wanted to implement a similar headline/subheadline treatment. Especially since most clips were around 5-10 seconds, these videos would be looping videos, meaning we wouldn’t have the description by the play button that exists on click-to-play videos.",
                  }}
                />
                <StackedBox style={{ marginBottom: "4rem" }}>
                  <div style={{ marginBottom: "1rem" }}>
                    <ImgCaption>
                      A peek of some early design system exploration where we
                      quickly made decisions on standalone videos
                    </ImgCaption>
                    <Image src={"./caseStudies/vets/system1.png"} />
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <Image src={"./caseStudies/vets/system2.png"} />
                  </div>
                </StackedBox>
                {/* <FlexWrapper style={{marginBottom: '4rem'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                      <ImgCaption>
                        (1) Vertical images that can be viewed in its full width
                        following a tap interaction
                      </ImgCaption>
                      <Video
                        src={
                          "https://ajl-portfolio-2026.s3.us-east-2.amazonaws.com/yip-mvp1.mov"
                        }
                      />
                    </div>
                </FlexWrapper> */}
                <ProjChunkText
                  dangerouslySetInnerHTML={{
                    __html:
                      "The bigger issue was scenarios in which we wanted to showcase more clips of a specific individual but didn’t think these clips were worthy of being standalones nor did we want to interrupt the text with too many clips. I decided to pitch the idea of an annotated video component – it would allow readers who didn’t click play to still understand what the individual was doing in each clip, and for readers who clicked play, they could understand that it was a collection of various clips edited together even if they didn’t finish watching the video.",
                  }}
                />
                <div style={{ marginBottom: "4rem" }}>
                  <Image src={"./caseStudies/vets/system 3.png"} />{" "}
                </div>
                <ProjChunkText
                  dangerouslySetInnerHTML={{
                    __html:
                      "In the initial design, I worried that the collection of annotations felt disconnected from the video. I wanted it to be clear that this was an additional feature to aid readers who have the habit of not clicking on videos but still be more of a supplement to those who do. For the next iteration, I aimed to get rid of the “Overview” & “Investigation timestamps” section as it broke up the video from the timestamps too much.",
                  }}
                />
                <FlexWrapper>
                  <ThirdImageBox>
                    <div>
                      <Image src={"./caseStudies/vets/v1-1.png"} />
                    </div>
                    <div>
                      <Image src={"./caseStudies/vets/v1-2.png"} />
                    </div>
                  </ThirdImageBox>
                </FlexWrapper>
              </ParaWrapper>

              <ProjChunkText
                dangerouslySetInnerHTML={{
                  __html:
                    "However, without the aforementioned section, I then realized it would be difficult for readers to know how to interact with the feature. After talking with a UX expert on our team, I added a prompt but kept its styling minimal. To further emphasize that the entire annotation was clickable, I styled the timestamp as a compact button to offer another indication of interactivity.",
                }}
              />

              <ProjChunkText
                dangerouslySetInnerHTML={{
                  __html:
                    "I also wanted to clarify that these annotations correspond with the video’s progress. As there was a blue “bullet” in our design system, I placed the bullet by its correlating annotation to indicate which annotation was active based on where the reader was in the video.",
                }}
              />

              <FlexWrapper>
                <ThirdImageBox>
                   <div>
                      <Image src={"./caseStudies/vets/v2-1.png"} />
                    </div>
                    <div>
                      <Image src={"./caseStudies/vets/v2-2.png"} />
                    </div>
                    <div>
                      <Image src={"./caseStudies/vets/v2-3.png"} />
                    </div>
                </ThirdImageBox>
              </FlexWrapper>
            </SectionWrapper>

            <SectionWrapper>
              <ProjChunkHed dangerouslySetInnerHTML={{ __html: "Solution" }} />
              <ProjChunkText
                dangerouslySetInnerHTML={{
                  __html:
                    "This feature was shipped for the second part of the series that highlighted specific individuals who exaggerated disabilities. The remaining stories used the more simpler video treatment that was part of our design system, but each required the same level of care when it came to solving design solutions specific to each story. ",
                }}
              />

                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '4rem'}}>
              <Video
                src={
                  "https://ajl-portfolio-2026.s3.us-east-2.amazonaws.com/hardfraud+ch+video+-+mockup.mp4"
                }
                width={"80%"}
              />
              </div>
            </SectionWrapper>

            <SectionWrapper>
              <ProjChunkHed dangerouslySetInnerHTML={{ __html: "Metrics" }} />
              <ProjChunkText
                dangerouslySetInnerHTML={{
                  __html:
                    "The series was published to a lot of public interest because of the topic area, resulting in over 200,000+ readers.",
                }}
              />

              <ProjChunkText
                dangerouslySetInnerHTML={{
                  __html:
                    "Since the annotated videos were toward the middle and end of the story, there was naturally some reader drop off (around <b>60%</b> of readers had stopped reading at the point in the story when we introduced the first annotated video component), so it is hard to say for certain whether it encouraged more video engagement. In the future, I would want to measure its success by tracking how long the video was in the viewport for a story with this annotated video component versus a story with a normal video component placed in the same spot of the story.",
                }}
              />

              <ParaWrapper header={false}>
                For the readers who got to the first chaptered video component:
                <ul>
                  <li>
                    <ProjChunkText
                      dangerouslySetInnerHTML={{
                        __html:
                          "<b>8%</b> opened the dropdown to see all of the timestamps (only the first timestamp was available to click unless the dropdown was open)",
                      }}
                    />
                  </li>
                  <li>
                    <ProjChunkText
                      dangerouslySetInnerHTML={{
                        __html:
                          "<b>25%</b> of those who opened the dropdown clicked on the first timestamp",
                      }}
                    />
                  </li>
                  <li>
                    <ProjChunkText
                      dangerouslySetInnerHTML={{
                        __html:
                          "<b>18%</b> clicked on the second, <b>8%</b> clicked on the third and <b>10%</b> clicked on the fourth",
                      }}
                    />
                  </li>
                </ul>
              </ParaWrapper>

              <ParaWrapper header={false}>
                And for the second chaptered video component:
                <ul>
                  <li>
                    <ProjChunkText
                      dangerouslySetInnerHTML={{
                        __html:
                          " <b>6%</b> opened the dropdown to see all of the timestamps",
                      }}
                    />
                  </li>
                  <li>
                    <ProjChunkText
                      dangerouslySetInnerHTML={{
                        __html:
                          "<b>19%</b> of those who opened the dropdown clicked on the first timestamp",
                      }}
                    />
                  </li>
                  <li>
                    <ProjChunkText
                      dangerouslySetInnerHTML={{
                        __html:
                          "<b>7%</b> clicked on the second, <b>10%</b> clicked on the third, <b>13%</b> clicked on the fourth and <b>9%</b> clicked on the fifth",
                      }}
                    />
                  </li>
                </ul>
              </ParaWrapper>

              <ProjChunkText
                dangerouslySetInnerHTML={{
                  __html:
                    "Thus, there is some indication that readers did use the annotation component to skip to the latter end of the video.",
                }}
              />
            </SectionWrapper>

            <SectionWrapper>
              <ProjChunkHed dangerouslySetInnerHTML={{ __html: "Takeaways" }} />

              <ProjChunkText
                dangerouslySetInnerHTML={{
                  __html:
                    "This project took place during a newsroom restructure, so a few editors left midway while new editors came in. As a result, my co-designer and I had to catch these editors up to speed and repeatedly present our designs and synthesize new feedback regularly. Since I was the lead developer who also worked in the office, I fielded many questions and requests from a wide variety of people, so I became more adept at thinking of design solutions on the fly and managing stakeholders.",
                }}
              />

              <ParaWrapper header={true}>
                <span>Ideas for improvement:</span>

                <ProjChunkText
                  dangerouslySetInnerHTML={{
                    __html:
                      "The video editor was a huge fan of this feature and wanted it to be a default component. I also think it is a valuable feature, so I would like to user test this feature on more stories to see what type of stories and where in a story it performs best. I’d like to further polish the design so that it is more flexible and fits better with the general Washington Post Design System i.e. troubleshooting what can be used instead of the blue bullet from our project’s specific design system.      ",
                  }}
                />
              </ParaWrapper>
            </SectionWrapper>
          </CSContentWrapper>
        </CaseStudyWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default Vets;
