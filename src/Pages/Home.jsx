import React from 'react'
import Common from './Common'
import travel43 from '../Images/travel43.jpg'
const Home = () => {
  let value = "Grow your bussiness with";
  return (
    <React.Fragment>
    <Common message={value} imgsrc={travel43} visit='/service' btnname='Get Started'/>
    </React.Fragment>
  )
}

export default Home