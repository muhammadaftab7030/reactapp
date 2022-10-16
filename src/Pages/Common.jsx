import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Common = (props) => {
  return (
    <React.Fragment>
    <div id="Header" className='d-flex align-items-center'>
    <div className='container-fluid nav_bg'>
    <div className='row'>
        <div className='col-10 mx-auto mb-4'>
        <div className='row'>
          <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
            <h1>
            {props.message} <strong className='brand-name'>Halal khan Travels</strong>
            </h1>
            <h2 className='my-4'>
            Halal Khan Travels is one of Pakistan's largest tour sellers and specialises in organising tours tailored to the specific interest, needs and requirements of every in – and outbound client.
            </h2>
            <div className='mt-3'>
            <NavLink to={props.visit} className='btn-get-started'>{props.btnname}</NavLink>
            </div>
          </div>
          <div className='col-lg-6 order-1 order-lg-2 header-img'>
            <img src={props.imgsrc} alt="Home image" className='img-fluid img-animate'/>
          </div>  
          </div>
        </div>
      </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Common