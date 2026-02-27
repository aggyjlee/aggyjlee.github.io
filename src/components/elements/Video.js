import styled from "styled-components";

function Video({ src, width }) {
  const TopPara = styled.p({});

  return (
    <video
      width="640"
      height="480"
      autoPlay
      muted
      loop
      playsinline
      style={{
        width: width || '90%',
        height: "auto",

      }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default Video;
