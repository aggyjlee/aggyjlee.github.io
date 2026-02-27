import styled from "styled-components";
import Video from './Video'

function ProjectMainVideo({ projName, alt, src }) {
  const MainWrapper = styled.div({
    display: "flex",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  });

  const TopPara = styled.p({});

  return (
    <MainWrapper>
        <Video src={src} />
      {/* <img
        src={`/mocks/${projName}.jpg`}
        alt={alt || "mockup of laptop and iphone screen"}
        style={{
          width: "100%",
          height: "auto",
          //   border: '2px solid red',
          borderRadius: "0.25rem",
          filter: "drop-shadow(0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.05))",
        }}
      /> */}
    </MainWrapper>
  );
}

export default ProjectMainVideo;
