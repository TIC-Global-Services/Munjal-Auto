import React from 'react'
import AboutHero from '../components/about/AboutHero'
import LegacySection from '../components/about/LegacySection'
import MunjalAutoGroup from '../components/about/MunjalAutoGroup'
import PioneeringText from '../components/about/PioneeringText'
import BoardOfDirectors from '../components/about/BoardOfDirectors'
import Clients from '../components/about/Clients'

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
