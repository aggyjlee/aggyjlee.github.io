import {
  MainWrapper,
  ContentWrapper,
  TopWrapper,
  ContentBlock,
} from "../Print/index.stitches";
import ProjectTop from "../elements/ProjectTop";
import ProjectMainVideo from "../elements/ProjectMainVideo";
import ProjectChunk from "../elements/ProjectChunk";

function DeathRow() {
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
          hed={"Death Row Story Page Design"}
          hedWidth={"30rem"}
          date={"September 2024 - November 2024"}
          role={"Developer/Designer"}
          button={true}
          link={"https://wapo.st/4sLB0NE"}
          overview={
            "As I gained more experience creating narrative, conceptual toppers, I joined this investigative piece examining death row in the United States for its topper potential. This story also didn’t have many photographs, so I was tasked with creating the story page design and design concept. I designed an ambitious topper that named all 4000 people on death row before narrowing it down to the main subject of the story."
          }
        />

        <ProjectMainVideo
          src={
            "https://ajl-portfolio-2026.s3.us-east-2.amazonaws.com/deathrow+-+desktop+mockup.mp4"
          }
          // projName={"oldestrestos"}
          // alt={`Mockup of an iPhone and Macbook screen that shows a screengrab of a man eating a dish from Washington Post's Oldest Restaurant story`}
        />
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

export default DeathRow;
