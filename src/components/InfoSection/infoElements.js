import styled from "styled-components";

export const InfoContainer = styled.div`
  color: white;
  /* border-radius: 100px; */
  width: 100%;
  /* margin: 20px auto; */
  background: ${({ lightBg }) => (lightBg ? "tan" : "#F8F0E3")};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 700px;
  width: 100%;
  max-width: 1100px;
  
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};
  column-gap: 100px;
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.p`
  color: #966d55;
  font-size: 18px;
  line-height: 16px;
  font-weight: 800;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 50px;
  width: 100%;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ darkText }) => (darkText ? " #2d353d " : "#2d353d")};
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? " grey" : "white")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
export const ImgWrap = styled.div`
  max-width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  max-width: 550px;
  margin: 0 0 10px 0;
  height: 300px;
  object-fit: fit;
`;
