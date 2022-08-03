import styled from "styled-components";



export const InfoRow = styled.div`
  position: relative;
  display: flex;
  background: transparent;
  color: #2d353d;
  width: 100%;
  height: 600px;
  align-items: center;
  justify-content: center;
  background: tan;

  @media screen and (max-width: 768px) {
    display: grid;
    background: tan;
    color: grey;
    width: 100%;
    height: 1600px;
    align-items: center;
    justify-content: center;
  }
`;


export const InfoCard = styled.div`
  background: #f8f0e3;
  height: 500px;
  display: grid;
  width: 22%;
  margin: 20px 24px;
  border-radius: 20px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    background: #f8f0e3;
    height: 450px;
    display: grid;
    width: 480px;
    margin-top: -100px;
    border-radius: 20px;
    justify-content: center;
  }
  &:hover {
    background: #e6eef0;
    transition: all 0.4s ease-in-out;
    margin-bottom: -50px;
  }
`;

export const ImgWrap = styled.div`
  width: 150px;
  background: transparent;
  height: 120px;
  border-radius: 100px;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  /* border: 0.5px green solid ; */
`;

export const InfoImg = styled.img`
  max-width: 100%;
  height: 100px;
  margin: 20px 12px;
`;
export const InfoCardHeading = styled.h3`
  font-size: 36px;
  text-decoration: none;
  text-align: center;
  max-width: 70%;
  margin-left:65px;
  margin-top:-40px;
`;
export const InfoText = styled.p`
  font-size: 20px;
  text-decoration: none;
  margin-top: -40px;
  margin-left: 36px;
  max-width: 80%;
  text-align: center;
  line-height: 1.2;
`;
