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

function YearInPhotos() {
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

  return (
    <MainWrapper>
      <ContentWrapper>
        <ProjectTop
          hed={
            "Redesigning an annual package with a mobile-first photo feature"
          }
          date={"November 2025 - December 2025"}
          role={"Lead developer, Designer"}
          button={true}
          link={"https://wapo.st/4rRMcYx"}
          overview={
            "Year In Photos is a print and digital package that publishes in December with a round up of the year’s best photography that best represents the major news events of that year. The digital story can range from a presentation of 80 to 100 photos. "
          }
          hedWidth={"30rem"}
          team={
            "<b>Team:</b> Developer/Designer (Agnes Lee), Designer (Josh Chen), Photo Editors, Photographers, Design Editors"
          }
        />
        <FlexWrapper>
          <ImageBox>
            <ProjectMainVideo
              src={
                "https://ajl-portfolio-2026.s3.us-east-2.amazonaws.com/yip-mobile-1.mp4"
              }
            />
            <ProjectMainVideo
              src={
                "https://ajl-portfolio-2026.s3.us-east-2.amazonaws.com/yip-mobile-2.mp4"
              }
            />
          </ImageBox>
        </FlexWrapper>
        <CaseStudyWrapper>
          <CSContentWrapper>
            <SectionWrapper>
              <ProjChunkHed dangerouslySetInnerHTML={{ __html: "Problem" }} />
              <ProjChunkText
                dangerouslySetInnerHTML={{
                  __html:
                    "Our metrics show that over 80% of our readership comes from mobile. Most of the photos in the package are horizontal, meaning many of the readers will see high-impact photos at only a fraction of their screen size. This often causes an early drop off on the page as many readers do not have the time to switch devices.",
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
                      "How can we create a more native mobile experience for a visuals-heavy package like Year In Photos?",
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
                    "A mobile-specific feature that vertically crops into images to take more of the device’s viewport size and allows users to view the full image on interaction.",
                }}
              />
              <SecondImageBox>
                <Image src={"./caseStudies/yip2025/final1.png"} />
                <Image src={"./caseStudies/yip2025/final2.png"} />
              </SecondImageBox>
            </SectionWrapper>

            <SectionWrapper>
              <ProjChunkHed dangerouslySetInnerHTML={{ __html: "Approach" }} />
              <ParaWrapper header={true}>
                <span>Considerations:</span>
                <ul>
                  <li>
                    <ProjChunkText
                      dangerouslySetInnerHTML={{
                        __html:
                          "Design was brought in toward the latter end of the workflow, so I had a short timeframe of around two weeks before publication. It had a strict publication date of December 11th since traditionally, news outlets aim to publish the package before the holiday rush.",
                      }}
                    />
                  </li>
                  <li>
                    <ProjChunkText
                      dangerouslySetInnerHTML={{
                        __html:
                          "The photo edit had been established for a while, so we had very little wiggle room with the number of photographs that needed to be displayed.",
                      }}
                    />
                  </li>
                </ul>
              </ParaWrapper>

              <ParaWrapper header={true}>
                <span>Insights:</span>
                <ProjChunkText
                  dangerouslySetInnerHTML={{
                    __html:
                      "Due to the tight timeline, we did not do user interviews, but there was a key stakeholder comment we knew we wanted to address:",
                  }}
                />
                <ul>
                  <li>
                    <ProjChunkText
                      dangerouslySetInnerHTML={{
                        __html:
                          "Design had heard from a managing editor that we would benefit from mobile-specific photo edits as horizontal photos do not read well on the smaller screen.",
                      }}
                    />
                  </li>
                </ul>
              </ParaWrapper>

              <ParaWrapper header={true}>
                <span>Existing Work:</span>
                <ProjChunkText
                  dangerouslySetInnerHTML={{
                    __html:
                      "Previous Year In Photos packages did a great job of improving on story layout and image size variations. Nonetheless, the smallest image size on desktop meant an even smaller photo on mobile to reflect that similar design principle.",
                  }}
                />
                <div>
                  <ImgCaption>
                    From 2024's package, the medium image size on desktop
                    converting to a smaller image on mobile due to the added
                    margins
                  </ImgCaption>

                  <Image src={"./caseStudies/yip2025/existing.jpg"} />
                </div>
              </ParaWrapper>

              <ParaWrapper header={true}>
                <span>Concepts:</span>
                <ProjChunkText
                  dangerouslySetInnerHTML={{
                    __html:
                      "Our Design Director had initially pitched the idea of this feature early on, so we already had buy-in from the photo editors and photographers regarding our desire to experiment with this feature since they were curious about whether it would be a solution to the aforementioned feedback from the ME.",
                  }}
                />
                <ProjChunkText
                  dangerouslySetInnerHTML={{
                    __html:
                      "After a brief meeting with the Design Director where we sketched out ideas on a whiteboard, I began thinking through the technical direction of the feature while Josh worked on typography and desktop image presentation.",
                  }}
                />
                <ProjChunkText
                  dangerouslySetInnerHTML={{
                    __html:
                      "During the first meeting I attended after being onboarded, I knew seeing the interaction would be imperative for the photo and design editors to best visualize the feature. I quickly set up two working MVPs to present at the meeting: ",
                  }}
                />
                <FlexWrapper>
                  <ThirdImageBox>
                    <div>
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
                    <div>
                      <ImgCaption>
                        (2) Vertical images that allow users to drag to see
                        different areas of the photo
                      </ImgCaption>
                      <Video
                        src={
                          "https://ajl-portfolio-2026.s3.us-east-2.amazonaws.com/yip-mvp2.mov"
                        }
                      />
                    </div>
                  </ThirdImageBox>
                </FlexWrapper>
                <EmojiWrapper belowImage={true}>
                  <EmojiContainer
                    dangerouslySetInnerHTML={{
                      __html: "⭐️",
                    }}
                  />

                  <ProjChunkText
                    css={"blue"}
                    dangerouslySetInnerHTML={{
                      __html:
                        "Ultimately, we decided to go ahead with the first option – we felt the drag feature would create a higher barrier of entry and cause readers to spend too much time on each photo.",
                    }}
                  />
                </EmojiWrapper>
              </ParaWrapper>

              <ProjChunkText
                dangerouslySetInnerHTML={{
                  __html:
                    "Another problem area I had to later address was figuring out how to best instruct readers on how to use the feature with a CTA. Considering the timeline and dev constraints, I knew that this feature would have to be available on every photo (which came out to 82 photos). Especially since it would be a new feature, it would be confusing if this feature was present on only a select number of photos with no rhyme or reason.",
                }}
              />

              <FlexWrapper>
                <ThirdImageBox>
                  <div>
                    <ImgCaption>
                      (1) Revisiting the MVP CTA with a compact button style
                    </ImgCaption>
                    <Image src={"./caseStudies/yip2025/cta1.jpg"} />
                  </div>
                  <div>
                    <ImgCaption>
                      (2) Timed overlay that fades out after a few seconds
                    </ImgCaption>
                    <Image src={"./caseStudies/yip2025/cta2.jpg"} />
                  </div>
                </ThirdImageBox>
              </FlexWrapper>
            </SectionWrapper>

            <SectionWrapper>
              <ProjChunkHed dangerouslySetInnerHTML={{ __html: "Solution" }} />
              <ProjChunkText
                dangerouslySetInnerHTML={{
                  __html:
                    "While its desktop presentation retains image size variations similar to previous years’, Year In Photos 2025 published on time with a mobile-specific presentation that increases photo size by utilizing a vertical crop and an interactive feature that allows viewers to display photos at its full width.",
                }}
              />

              <ParaWrapper header={false}>
                Following internal user feedback sessions (with individual
                designers and all five of the design editors due to the short timeframe of the project), I addressed the CTA issue by adding:
                <ul>
                  <li>
                    <ProjChunkText
                      dangerouslySetInnerHTML={{
                        __html:
                          "An info box with instructions and an explanation of the intent behind the design before the start of the photo package",
                      }}
                    />
                  </li>
                  <li>
                    <ProjChunkText
                      dangerouslySetInnerHTML={{
                        __html:
                          "CTAs over a slim gradient for better readability that repeats on specific photos requested by photo editors",
                      }}
                    />
                  </li>
                  <li>
                    <ProjChunkText
                      dangerouslySetInnerHTML={{
                        __html:
                          "A slight transform animation on the image itself to provide better visual feedback immediately following the interaction",
                      }}
                    />
                  </li>
                </ul>
              </ParaWrapper>

              <ProjChunkText
                dangerouslySetInnerHTML={{
                  __html:
                    "Since I refactored the existing Image component within the interactive template, the photo editors were still able to employ the focal point tool in the Post’s internal CMS to make changes to the photos on their own.",
                }}
                style={{marginBottom: '2rem'}}
              />
              <FlexWrapper>
                <ImageBox>
                  <ProjectMainVideo
                    src={
                      "https://ajl-portfolio-2026.s3.us-east-2.amazonaws.com/yip-mobile-1.mp4"
                    }
                  />
                  <ProjectMainVideo
                    src={
                      "https://ajl-portfolio-2026.s3.us-east-2.amazonaws.com/yip-mobile-2.mp4"
                    }
                  />
                </ImageBox>
              </FlexWrapper>
            </SectionWrapper>

            <SectionWrapper>
              <ProjChunkHed dangerouslySetInnerHTML={{ __html: "Metrics" }} />
              <ProjChunkText
                dangerouslySetInnerHTML={{
                  __html:
                    "The story received good feedback from the same managing editor that had first brought up our need for a mobile-specific photo presentation.",
                }}
              />

              <ParaWrapper header={false}>
                Based on the analytics on Looker Studio, I learned:
                <ul>
                  <li>
                    <ProjChunkText
                      dangerouslySetInnerHTML={{
                        __html:
                          "<b>28.42%</b> of mobile users tapped at least one image throughout the story",
                      }}
                    />
                  </li>
                  <li>
                    <ProjChunkText
                      dangerouslySetInnerHTML={{
                        __html:
                          "The most a user had clicked throughout the story was <b>43 times (1.43% of users)</b>",
                      }}
                    />
                  </li>
                </ul>
              </ParaWrapper>

              <ProjChunkText
                dangerouslySetInnerHTML={{
                  __html:
                    "Most significantly though, around <b>26%</b> of mobile readers made it to the end of the 2025 package, which was more than double the rate of the 2024 package where around <b>11%</b> of readers made it to the story’s end. Of course, 2024 had 20 more photos and thus a longer scroll; yet, there was an almost immediate <b>50% drop off</b> in readership from the story top to the fourth photo in 2024 whereas 2025 <b>only showed a 30% drop</b> by its fourth photo.",
                }}
              />
            </SectionWrapper>

            <SectionWrapper>
              <ProjChunkHed dangerouslySetInnerHTML={{ __html: "Takeaways" }} />

              <ProjChunkText
                dangerouslySetInnerHTML={{
                  __html:
                    "<span>Suggestions for future use:</span> Although lower in the story, the image of the aerial view of Gaza performed quite well, showing that photos that are true landscapes or seem to be “busy” may grab the attention of readers and encourage them to want to see more i.e. stories that want to display a few high-impact photos.",
                }}
              />

              <ParaWrapper header={true}>
                <span>Ideas for improvement:</span>
                <ul>
                  <li>
                    <ProjChunkText
                      dangerouslySetInnerHTML={{
                        __html:
                          "I’d love to try A/B testing with different CTA icons or language to see which combinates would nudge the reader to interact more.",
                      }}
                    />
                  </li>
                  <li>
                    <ProjChunkText
                      dangerouslySetInnerHTML={{
                        __html:
                          "I think this was an ambitious project to utilize the feature because there were so many photos – it would be interesting to see on a smaller-scale project since 80 photos naturally cause weariness.",
                      }}
                    />
                  </li>
                </ul>
              </ParaWrapper>
            </SectionWrapper>
          </CSContentWrapper>
        </CaseStudyWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default YearInPhotos;
