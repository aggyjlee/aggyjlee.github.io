import {
  MainWrapper,
  ContentWrapper,
  TopWrapper,
  ContentBlock,
} from "../Print/index.stitches";
import ProjectTop from "../elements/ProjectTop";
import Image from "../elements/Image";
import ProjectChunk from "../elements/ProjectChunk";

function AppleNews() {
  const text = [
    "To create the general visual direction of the project, Marissa and I looked at previous food stories from the Post and by other publications. We knew Tom would be featuring around 5-6 restaurants with each having its own photography, so we were worried about how much the reader would have to scroll and how to best package the information; therefore, we made sure to research how other stories handled this issue.",
    "While I was assigned to be the lead developer and Marissa was the print designer, the two of us worked on mockups separately first and then discussed together what we liked from each version. Marissa came with a very elegant design with great typography, so I was a big proponent of going in her design direction. At this point, we saw some of Tom's copy – seeing that the text length was quite substantial, we decided on keeping text collapsed within each restaurant section.",
    "After discussing with the project team, I went ahead and began developing the story. I focused on how to curate the best user experience to ensure that a reader could navigate through each restaurant seamlessly and never feel stuck in one section. To add in more of the beautiful photography, we also added a special horizontal gallery for mobile since we knew native behavior is to swipe to see more photos. However, on desktop, I felt this experience would feel clunky, so instead I opted to show only three vertical photos in one viewport size – alluding to a general gallery design but making sure that a reader would not feel confused about what to do.",
  ];

  const imageArray = [
    [
      "/oldestrestos-moodboard.png",
      "Early stages of moodboarding",
      "Early stages of moodboarding",
    ],
    [
      "/oldestrestos-research.png",
      "Screengrab of some of our UX research",
      "Collecting links for UX inspiration during our visual research phase",
    ],
    [
      "/oldestrestos-mockup2.png",
      "Screengrab of a collection of Figma mockups",
      "Figma mockups where we explored collapsible organization",
    ],
  ];

  const sections = [
    {
      hed: "Process",
      text: [
        "To create the general visual direction of the project, Marissa and I looked at food stories from the Post and by other publications. We knew Tom would be featuring around 5-6 restaurants with each having its own photography, so we were worried about how much the reader would have to scroll and how to best package the information; therefore, we made sure to research how other stories handled this issue.",
        "While I was assigned to be the lead developer and Marissa was the print designer, the two of us worked on mockups separately first and then discussed together what we liked from each version. Marissa came with a very elegant design with great typography, so I was a big proponent of going in her design direction. At this point, we saw some of Tom's copy – seeing that the text length was quite substantial, we decided on keeping text collapsed within each restaurant section.",
        "After discussing with the project team, I went ahead and began developing the story. I focused on how to curate the best user experience to ensure that a reader could navigate through each restaurant seamlessly and never feel stuck in one section. To add in more of the beautiful photography, we also added a special horizontal gallery for mobile since we knew native behavior is to swipe to see more photos. However, on desktop, I felt this experience would feel clunky, so instead I opted to show only three vertical photos in one viewport size – alluding to a general gallery design but making sure that a reader would not feel confused about what to do.",
      ],
    },
    {
      hed: "Outcomes",
      text: [
        "As many subscribers were sad to see Tom step down, the story published with a lot of positivity in the comments and across social media!",
        "Around 65% of readers scrolled all the way down to the end of the entire package. Of course, not all of these readers read the entirety of each restaurant's story; however, for those who did opt in to read the full text of the first restaurant, around 84% reached the end and only 7% collapsed the text.",
      ],
    },
  ];
  return (
    <MainWrapper>
      <ContentWrapper>
        <ProjectTop
          hed={"Apple News Conversions"}
          hedWidth={"30rem"}
          date={"Various dates from 2022-2024"}
          role={"Developer (Using News Preview, Apple News CMS)"}
          button={true}
          link={"https://apple.news/AX1baQZ_bSm667CvvgvrlrA"}
          overview={
            "The Post had an internal template and CMS that allowed us to convert our digital stories for the Apple News platform. Only a small team of me and two other designers (out of 50) was familiar with this workflow. I joined digital projects close to the digital publication date to work with the project’s designer and begin the conversion process for the platform that tends to be more mobile-friendly. "
          }
        />

        <div>
          <Image
            src={
              "./mocks/applenews.jpg"
            }
            // projName={"oldestrestos"}
            // alt={`Mockup of an iPhone and Macbook screen that shows a screengrab of a man eating a dish from Washington Post's Oldest Restaurant story`}
          />
        </div>
        {/* <ProjectChunk
          header={"Process"}
          text={text}
          imageArray={imageArray}
          sections={sections}
          mobileSrc={
            "https://ajl-portfolio-2026.s3.us-east-2.amazonaws.com/oldestrestos+-+mobile+mockup.mp4"
          }
        /> */}
      </ContentWrapper>
    </MainWrapper>
  );
}

export default AppleNews;
