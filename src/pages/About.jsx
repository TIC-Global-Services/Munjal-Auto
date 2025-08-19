import React from 'react'
import AboutHero from '../components/About/AboutHero'
import LegacySection from '../components/About/LegacySection'
import MunjalAutoGroup from '../components/About/MunjalAutoGroup'
import PioneeringText from '../components/About/PioneeringText'
import BoardOfDirectors from '../components/About/BoardOfDirectors'
import Clients from '../components/About/Clients'

const About = () => {
  return (
    <div>
      <AboutHero />
      <LegacySection />
      <MunjalAutoGroup />
      <PioneeringText />
      <BoardOfDirectors />
      <Clients />
    </div>
  )
}

export default About
