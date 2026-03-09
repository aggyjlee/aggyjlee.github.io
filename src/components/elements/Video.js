import styled from "styled-components";

function Video({ src, width, borderRadius, filter }) {
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
        borderRadius: borderRadius ? "0.25rem" : '',
        filter: filter ? "drop-shadow(0.2rem 0.3rem 0.5rem rgba(0, 0, 0, 0.05))" : '',
      }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default Video;
