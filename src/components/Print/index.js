import {
  MainWrapper,
  ContentWrapper,
  TopWrapper,
  ContentBlock,
} from "./index.stitches";

function Print() {
  const printArray = [
    "20240531",
    "20250812",
    "20250404",
    "20240715",
    "20240823",
    "20241108",
    "20241111",
    "20241230",
    "20240304",
    "20240320",
    "20240517",
    "20240619",
    "20250420-1",
    "20250420",
    "20230707",
  ];
  return (
    <MainWrapper>
      <ContentWrapper>
        <TopWrapper>
          <h3>Print Design</h3>
          <p>
            At the Post, I regularly designed the Style, Metro
            and A sections. I was also one of a select group of designers who
            designed A1 on a consistent basis. These shifts called for
            close collaboration with photo and copy editors, in addition to
            applying feedback and quickly responding to breaking news under
            tight, nightly deadlines.
          </p>
        </TopWrapper>

        <ContentBlock>
          {printArray.map((item, i) => {
            return (
              <img
                src={`/print/${item}.jpg`}
                alt="project thumbnail"
                key={i}
                style={{ width: "100%", height: "auto", border: '0.2px solid gray'}}
              />
            );
          })}
        </ContentBlock>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default Print;
