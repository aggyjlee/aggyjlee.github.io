import styled from "styled-components";

function Video({ src, alt, marginTop, width, height}) {
  const TopPara = styled.p({});

  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: width || '100%',
        height: height || "auto",
        //   border: "2px solid blue",
        borderRadius: "0.25rem",
        filter: "drop-shadow(0.2rem 0.3rem 0.5rem rgba(0, 0, 0, 0.05))",
        marginTop: marginTop || ''
      }}
    />
  );
}

export default Video;
