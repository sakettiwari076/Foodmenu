import React from 'react'
import {useState } from 'react'
import axios  from 'axios'
const Contactus = () => {
const[user , setUser] = useState (
    {
name : "",
email : "",
feedback : ""


    }
)
const handleChange = e => {
    const { name , value }=e.target
        setUser(
            {
                ...user,
                [name]:value
            }
        )
    }
    const send =()=>{

        const { name , email , feedback} = user
        if( name && email && feedback)
        {
            
            axios.post("http://localhost:9002/register", user)
            .then(res => console.log(res))

        }
         else {
            alert("Please enter all the fields")
         }
    }
  return (
    <div>
    {console.log("User", user)}

    <h1 className='fonthead text-center py-3'>Feedback</h1>
    <div className="mb-3 fonthead container">
    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
    <input type="email" className="form-control" name="name" value={user.name} onChange={handleChange}  id="exampleFormControlInput1"  placeholder="name@example.com"/>
    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange}    id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="mb-3 container">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
    <textarea className="form-control container" name="feedback" value={user.feedback} onChange={handleChange}   id="exampleFormControlTextarea1" rows="3"></textarea>
    <button className='btn btn-primary' onClick={send} >SUBMIT</button>
  </div>
    </div>
  )
}

export default Contactus