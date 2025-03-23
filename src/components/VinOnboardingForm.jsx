/* eslint-disable no-unused-vars */
import {useState} from 'react'
import{submitVinData} from '../api/api.js'

export default function VinOnboardingForm(){
  const obj ={
    ecuID: '',
    vin:'',
    modelCode:'',
    manufacturer:'',
    productionYear:'',
    chassisNumber:'',
    firmwareVersion:'',
    serialNumber:'',
  }
  const[formData, setFormData]= useState(obj)


  const handleSubmit = async(e)=> {
    e.preventDefault();
    try{
      await submitVinData(formData);
      alert("VIN Onboarded Successfully!");
    } catch(error){
      alert('Error Onboarding VIN')
    }
  }
  let k=[{label:'VIN', labelItem:'vin'},{label:'Model Code', labelItem:'modelCode'},{label:'Manufacturer', labelItem:'manufacturer'},{label:'Production Year', labelItem:'productionYear'}]
    // k.map((item,i)=><comp label={item.label} item.labelItem}/>.)

    const FormField =(({label,labelItem})=>
      <div className="form-group-field">
        <label>{label}</label>
        <input type="text" required onChange={(e)=> setFormData({...formData, [labelItem]:e.target.value})}/>
     </div>
    )
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>VIN Onboarding</h2>
      <div className="form-group-row">
        <li className='form-group'>
          {k.map((item,i)=><FormField key={i} label={item.label} labelItem={item.labelItem}/>)}
          {/* <div className="form-group-field">
            <label >VIN:</label>
            <input type="text" required onChange={(e)=> setFormData({...formData, vin:e.target.value})}/>
          </div>
          <div className="form-group-field">
            <label align>Chassis Number:</label>
            <input type="text" required onChange={(e)=> setFormData({...formData, chassisNumber:e.target.value})} />
          </div>
          <div className="form-group-field">
            <label>EcuID:</label>
            <input type="text" required onChange={(e)=> setFormData({...formData, ecuId:e.target.value})}/>
          </div>
          <div className="form-group-field">
            <label>Model Code:</label>
            <input type="text" required onChange={(e)=> setFormData({...formData, modelCode:e.target.value})} />
          </div> */}
      </li>
        {/* <li className='form-group'>
          <div className="form-group-field">
           <label>Firmware Version:</label>
            <input type="text" required onChange={(e)=> setFormData({...formData, firmwareVersion:e.target.value})} />
          </div> 
          <div className="form-group-field">
            <label>Serial Number:</label>
            <input type="text" required onChange={(e)=> setFormData({...formData, serialNumber:e.target.value})} />
          </div> 
          <div className="form-group-field">
            <label>Manufacturer:</label>
            <input type="text" required onChange={(e)=> setFormData({...formData, manufacturer:e.target.value})} />
          </div>
          <div className="form-group-field">
            <label>Production Year:</label>
            <input type="text" required onChange={(e)=> setFormData({...formData, productionYear:e.target.value})} />
          </div>
      </li> */}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
