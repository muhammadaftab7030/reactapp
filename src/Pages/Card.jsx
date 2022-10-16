import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Card = ({...itemvalue}) => {
  return (
    <React.Fragment>
    <div className='col-10 col-md-4 mx-auto'>
            <div className="card">
            <img src={itemvalue.imgsrc} className="card-img-top" alt='card images'/>
            <div className="card-body">
              <h5 className="card-title">{itemvalue.title}</h5>
              <p className="card-text"><strong>Package: </strong>{itemvalue.package} <hr/><br/>
              <strong>Meals: </strong>{itemvalue.meals} <hr/><br/>
              <strong>Package Including: </strong>{itemvalue.package_including} <hr/></p>
              <NavLink to="/contact" className="btn btn-primary">Book Now</NavLink>
            </div>
          </div>
            </div>
    </React.Fragment>
  )
}

export default Card