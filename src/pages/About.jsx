import React from 'react'
import AboutHero from '../components/About/AboutHero'
import LegacySection from '../components/About/LegacySection'
import MunjalAutoGroup from '../components/About/MunjalAutoGroup'
import PioneeringText from '../components/About/PioneeringText'
import BoardOfDirectors from '../components/About/BoardOfDirectors'
import Clients from '../components/About/Clients'
import Committees from '../components/About/committees'
import GroupCompanies from '../components/About/groupCompanies'
import Compositetechnology from '../components/About/compositetechnology'
import Technologyalliance from '../components/About/technologyalliance'
const About = () => {
  return (
    <div>
      <AboutHero />
      <LegacySection />
      <MunjalAutoGroup />
      <PioneeringText />
      <BoardOfDirectors />
      <Committees/>
      <GroupCompanies/>
      <Compositetechnology/>
      <Technologyalliance/>
      <Clients />
    </div>
  )
}

export default About
