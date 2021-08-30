import React from 'react';

import { Section, SectionText, SectionTitle, SectionTitle2 } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there!! <br/>
        My name is<br/> 
      </SectionTitle>
      <SectionTitle2 center>
      João Beirão
      </SectionTitle2>
      <SectionText>
        Some remdom text.
      </SectionText>
      <Button onClick={() => window.location="https://google.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;