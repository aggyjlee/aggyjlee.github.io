import styled from "styled-components";
import Video from "./Video";

function ProjectChunk({ header, text, imageArray, sections, mobileSrc }) {
  const MainWrapper = styled.div({
    // border: "2px solid red",
    marginTop: '4rem',
    "@media only screen and (min-width: 768px)": {
      display: "grid",
      gridTemplateColumns: "40% 40%",
      gap: "20%",
          marginTop: "6rem",
    },
  });

  const ProjChunkHed = styled.h4({
    color: "#006894",
    fontWeight: "normal",
    fontSize: "25px",
    margin: "0",
    marginBottom: "1rem",
  });

  const ProjChunkText = styled.p({
    fontFamily: "Helvetica Neue",
    // border: "2px solid red",
    margin: "0",
    marginBottom: "0.75rem",
  });

  const ProjChunkContent = styled.div({

  });

  const MobileSide = styled.div({
        "@media only screen and (min-width: 768px)": {
      display: 'none'
    }
  });
  const RightSide = styled.div({
     gap: "2rem", display: "flex", flexDirection: "column",
    "@media only screen and (max-width: 767px)": {
      display: 'none'
    },
  });

  const LeftSide = styled.div({
    "@media only screen and (min-width: 768px)": {
      "div:nth-child(2) > h4": {
        marginTop: "2rem",
      },
    },
    "@media only screen and (max-width: 767px)": {
      display: "none",
    },
  });

  const ImgCaption = styled.p({
    fontFamily: "Helvetica Neue",
    margin: "0",
    fontSize: "12px",
    color: "#111111",
    paddingTop: "0.5rem",
  });

  return (
    <MainWrapper>
      <LeftSide>
        {sections.map((section, i) => {
          const header = section.hed;
          const text = section.text;
          return (
            <div key={i} style={{}}>
              <ProjChunkHed>{header}</ProjChunkHed>
              <ProjChunkContent>
                {text.map((item, i) => {
                  return (
                    <ProjChunkText
                      key={i}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  );
                })}
              </ProjChunkContent>
            </div>
          );
        })}
        <div style={{ marginTop: "2rem" }}>
          <Video src={mobileSrc} width={"60%"} />
        </div>
      </LeftSide>

      <MobileSide>
        {sections.map((section, i) => {
          const header = section.hed;
          const text = section.text;

          if (i == 0) {
            return (
              <>
                <div key={i} style={{}}>
                  <ProjChunkHed>{header}</ProjChunkHed>
                  <ProjChunkContent>
                    {text.map((item, i) => {
                      return (
                        <ProjChunkText
                          key={i}
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      );
                    })}
                  </ProjChunkContent>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                  {imageArray.map((content, i) => {
                    console.log(content);
                    const img = content[0];
                    const alt = content[1];
                    const caption = content[2];
                    return (
                      <div key={i} style={{}}>
                        <img
                          src={`/projs/${img}`}
                          alt={alt}
                          style={{
                            width: "100%",
                            height: "auto",
                            //   border: "2px solid blue",
                            borderRadius: "0.25rem",
                            filter:
                              "drop-shadow(0.2rem 0.3rem 0.5rem rgba(0, 0, 0, 0.05))",
                          }}
                        />
                        <ImgCaption>{caption}</ImgCaption>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          } else
            return (
              <div key={i} style={{marginTop: '3rem'}}>
                <ProjChunkHed>{header}</ProjChunkHed>
                <ProjChunkContent>
                  {text.map((item, i) => {
                    return (
                      <ProjChunkText
                        key={i}
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    );
                  })}
                </ProjChunkContent>
                
              </div>
            );
        })}
        <div style={{ marginTop: "2rem", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Video src={mobileSrc} width={"80%"} />
        </div>
      </MobileSide>

      <RightSide style={{}}>
        {imageArray.map((content, i) => {
          console.log(content);
          const img = content[0];
          const alt = content[1];
          const caption = content[2];
          return (
            <div key={i} style={{}}>
              <img
                src={`/projs/${img}`}
                alt={alt}
                style={{
                  width: "100%",
                  height: "auto",
                  //   border: "2px solid blue",
                  borderRadius: "0.25rem",
                  filter:
                    "drop-shadow(0.2rem 0.3rem 0.5rem rgba(0, 0, 0, 0.05))",
                }}
              />
              <ImgCaption>{caption}</ImgCaption>
            </div>
          );
        })}
      </RightSide>
    </MainWrapper>
  );
}

export default ProjectChunk;
