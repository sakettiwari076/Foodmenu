import React from 'react'

const Menu = (props) => {
  return (
    <div className='container'>
<div className='box '>
<div className='row '>
<div className='col'>
<p className=' fonthead headingclass px-2'>{props.foodname}</p>
<p className='fonthead specialcss  px-2'>{props.special}</p>
<p className='pricecss fonthead  px-2 '>{props.price}</p>
</div>
<div className='col'>
<img src={props.imagesource} className='imagefood ' alt=''/>

</div>
</div>
</div>
    </div>
  )
}

export default Menu;