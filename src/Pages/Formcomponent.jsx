import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Formcomponent = (props) => {
  return (
    <React.Fragment>
    <div className="mb-3">
    <label for="exampleFormControlInput1"  className="form-label">{props.inputname}</label>
    <input type={props.type} name={props.name} value={props.value} onChange={props.onchange} className="form-control" id="exampleFormControlInput1" placeholder={props.placeholder} required='required'/>
    </div>
    </React.Fragment>
  )
}

export default Formcomponent