import React from 'react'
import Card from './Card'
import { Sdata } from '../ApiData/Sdata'

const Service = () => {
  return (
    <React.Fragment>
    <div className='my-5'><h1 className='text-center'>Our Services</h1></div>
    <div className='container-fluid nav_bg'>
    <div className='row'>
        <div className='col-10 mx-auto'>
          <div className='row gy-5 mb-5'>
            {
              Sdata.map((itemValue,index)=>{
                return(
                  <Card key={index} {...itemValue}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Service