import React from 'react'
import Common from './Common'
import about from '../Images/about.jpg'

const About = () => {
  return (
    <React.Fragment>
    <Common message="Welcome to About Page" imgsrc={about} visit='/contact' btnname='Contact Now'/>
    </React.Fragment>
  )
}

export default About