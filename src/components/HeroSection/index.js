import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements';

const HeroSection = () => {

    const [hover,setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover)
    }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          IT-Betrieb als entscheidender Faktor für den Unternehmenserfolg.
        </HeroH1>
        <HeroP>
          KALIQI it-solutions ist seit mehr als 20 Jahren kompetenter und
          zuverlässiger IT-Dienstleister.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="services"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Kostenlosen Demo {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection
