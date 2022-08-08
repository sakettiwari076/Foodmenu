import React from 'react'

const Navbar = () => {
  return (
    <div>
    <div className='container'>
    <div className=' row py-2 '>
    <div className='col'>
    </div>
    <div className='col'>
    <div className="dropdown">
    <button className="buttoncss fonthead fs-2  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Our Food
    </button>
    <ul className="dropdown-menu fonthead">
      <li><a className="dropdown-item " href="#">Starters</a></li>
      <li><a className="dropdown-item" href="#">Non-veg</a></li>
      <li><a className="dropdown-item" href="#">Special</a></li>
    </ul>
  </div>
    </div>
    <div className='col'>
    <img src='chillilogo.jpeg ' className='logocss'/>

    </div>
    
    
    </div>
    </div>
    </div>

  )
}

export default Navbar;