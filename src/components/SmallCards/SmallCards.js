import React from "react";
import {
  InfoCard,
  ImgWrap,
  InfoImg,
  InfoCardHeading,
  InfoText,
} from "./SmallCardElements";

const SmallCards = ({ style ,Img, altText, Heading, subtitle , id }) => {
 
  return (
    <>
      
          <InfoCard style={style} id={id}>
            <ImgWrap>
              <InfoImg src={Img} alt={altText}></InfoImg>
            </ImgWrap>

            <InfoCardHeading>{Heading}</InfoCardHeading>
            <InfoText>{subtitle}</InfoText>
          
          </InfoCard>
      
    </>
  );
};

export default SmallCards;
