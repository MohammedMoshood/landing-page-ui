import React from 'react'
import { Button } from '../GetStButton'

import { InfoContainer , InfoWrapper , InfoRow , TopLine , Column1 , Column2 , BtnWrap , Subtitle , TextWrapper , ImgWrap , Img , Heading } from './infoElements'

const InfoSection = ({to ,id,imgStart,topLine, headline,description,img, alt ,buttonLabel , lightBg , darkText , dark , primary
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
                            primary={primary}
                            dark={dark}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            to={to}> {buttonLabel}</Button>
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