import React from 'react'
import { Button } from '../GetStButton'

import { InfoContainer , InfoWrapper , InfoRow , TopLine , Column1 , Column2 , BtnWrap , Subtitle , TextWrapper , ImgWrap , Img , Heading } from './infoElements'

const InfoSection = ({id,imgStart,topLine, headline,description,img, alt ,buttonLabel , lightBg , needSpace  , darkText
}) => {
  return (
    <>
        <InfoContainer id={id} lightBg={lightBg}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine> {topLine}</TopLine>
                        <Heading>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        < BtnWrap>
                            <Button 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            to='home'> {buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2 >
                        <ImgWrap>
                            <Img src={img} height="250px" alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection