import React from 'react'
import Card from './Card'
import { Sdata } from '../ApiData/Sdata'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useState } from 'react';


const Service = () => {
let [search, setsearch] = useState('');
let [sdata, setsdata] = useState(Sdata);

  let searchHandler = (e)=>{
    setsearch(e.target.value);    
    
  }
  let getSearch = ()=>{
    let searchValue = search.toLocaleUpperCase();
    
    if(searchValue === ''){ 
      setsdata(Sdata);  
    }else{
    let updatedValue = Sdata.filter((elem)=>{
      return elem.title === searchValue
    })
    if(updatedValue.length === 0){
      alert('No record found!')
    }else{
      setsdata(updatedValue)
    }    
  }
  }

  

  return (
    <React.Fragment>
    <div className='my-5'><h1 className='text-center'>Our Services</h1></div>
    <div className='container-fluid nav_bg'>
    <div className='row'>
        <div className='col-10 mx-auto'>
          <div className='row gy-5 mb-5 '>
          <div className='row gy-4 px-0 m-0'>
          <div className='col-12 col-md-8 col-lg-8  col-xl-8'>
          </div>
          <div className='col-12 col-md-4 col-lg-4 col-xl-4'>
          <div className="mb-3">
          <div className="input-group mb-3">
          <input type="text" className="form-control" value={search} onChange={searchHandler} placeholder="Search..." aria-label="Search..." aria-describedby="button-addon2" />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={getSearch}><SearchOutlinedIcon /></button>
          </div>
          </div>
          </div>
          </div>
            {
              sdata.map((itemValue,index)=>{
                return(
                  <Card key={index} {...itemValue} />
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