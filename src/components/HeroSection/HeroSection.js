import React , {useState} from "react";
import { HeroBg, HeroContainer, VideoBg , HeroBtnWrapper, HeroContent, HeroH1,HeroP,ArrowForward,ArrowRight } from "./HeroElements";
import Video from "../../videos/HeroBG.mp4";
import { Button } from "../GetStButton";

const HeroSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Get Anything Delivered to you</HeroH1>
        <HeroP>
            Sign up today and have access to thousands of agents ready to deliver what you are in search of.
        </HeroP>
        <HeroBtnWrapper>
          <Button fontBig to='signup' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Get Started {isHovering ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>

    </HeroContainer>
  );
};

export default HeroSection;
