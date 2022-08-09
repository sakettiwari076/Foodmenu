import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Menu  from '../components/Menu'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    
    <div>
    <Navbar/>
    <div className='py-3'>
<h1 className='container fonthead py-2'>Non-Veg</h1>
    <Menu 
    foodname="Chicken"
    special="Mushroom and chilli"
    price="Rs 100"
    imagesource='https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80'
    />
    </div>
    <div className='py-3'>
    <Menu foodname="Briyani"
    special="Mushroom and chilli"
    price="Rs 100"
    imagesource='https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80'
    />
    </div>
    <div className='py-3'>
    <Menu foodname="Mutton"
    special="Mushroom and chilli"
    price="Rs 100"
    imagesource='https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80'
    />
    </div>
    <div className='py-3'>
    <Menu foodname="Sara"
    special="Mushroom and chilli"
    price="Rs 100"
    imagesource='https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80'
    />
    </div>
    <div className='py-3'>
    <Menu foodname="Sara"
    special="Mushroom and chilli"
    price="Rs 100"
    imagesource='https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80'
    />
    </div>
    <div className='py-3'>
    <Menu foodname="Sara"
    special="Mushroom and chilli"
    price="Rs 100"
    imagesource='https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80'
    />
    </div>
    <div className='py-3'>
    <Menu foodname="Sara"
    special="Mushroom and chilli"
    price="Rs 100"
    imagesource='https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80'
    />
    </div>
    


    </div>
  )
}

