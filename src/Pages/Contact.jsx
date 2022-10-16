import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Formcomponent from './Formcomponent'

const Contact = () => {
  let [formData, SetfromData] = useState({
    full_name: '',
    phone: '',
    email: '',
    msg: '',
  });
  let inputFieldHandler = (e)=>{
    let {value,name} = e.target;
    SetfromData((prevData)=>{
      return{
        ...prevData,
      [name]: value
      }
    })
  } 
  let formsubmit = (e)=>{
    e.preventDefault();
    let {full_name, phone, email, msg} = formData;
    alert(`My name is ${full_name}. My phone no. ${phone} and email address is ${email}. I want to say that ${msg}`);
    SetfromData({
    full_name: '',
    phone: '',
    email: '',
    msg: '',
    });
  }
  return (
    <React.Fragment>
    <div className='my-5'><h1 className='text-center'>Contact Us</h1></div>
    <div className='container contact-div'>
    <div className='row'>
    <div className='col-10 col-md-6 mx-auto'>
    <form>
    <Formcomponent inputname='Full Name' name='full_name' value={formData.full_name} onchange={inputFieldHandler} type='text' placeholder='Enter your name' />
    <Formcomponent inputname='Phone' name='phone' value={formData.phone} onchange={inputFieldHandler} type='number' placeholder='Enter your mobile number' />
    <Formcomponent inputname='Email' name='email' value={formData.email} onchange={inputFieldHandler} type='email' placeholder='Enter your email' />
    <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
    <textarea name='msg' value={formData.msg} onChange={inputFieldHandler} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div className="col-12">
    <button type="submit" onClick={formsubmit} className="btn btn-outline-primary mb-3">Submit</button>
  </div>

    </form>
    </div>
    </div>
    </div>
    </React.Fragment>
  )
}

export default Contact