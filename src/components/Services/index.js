import React from 'react'

import Icon3 from '../../images/svg-3.svg';
import Icon4 from '../../images/svg-4.svg';
import { ServicesContainer, ServicesH1,ServicesH2,ServicesCard,ServicesIcon,ServicesP,ServicesWrapper } from './ServicesElements'

const Services = ({headLine,img4,paragraph4,headLine5,paragraph3,headLine4,img3,headLine2,paragraph1,img1,img2,headLine3,paragraph2}) => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>{headLine}</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={img1}/>
            <ServicesH2>{headLine2}</ServicesH2>
            <ServicesP>{paragraph1}</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={img2}/>
            <ServicesH2>{headLine3}</ServicesH2>
            <ServicesP>{paragraph2}
                
            </ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={img3}/>
            <ServicesH2>{headLine4}</ServicesH2>
            <ServicesP>{paragraph3}

            </ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={img4}/>
            <ServicesH2>{headLine5}</ServicesH2>
            <ServicesP>{paragraph4}

            </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
