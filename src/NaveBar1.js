import React from 'react'
import { Link } from 'react-router-dom'

export default function NaveBar() {
  return (
        <div className='parentNave'>
          <div className='nave'>
            <div className='flex'>
                <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
                <p id="logo">GeekFoods</p>
            </div>
            <div className='flex gapes'>
              <Link to="/home" className='aStyle'>
              <p>Home</p>
              </Link>
                <Link to="/commit" className='aStyle'>
                <p>Quote</p>
                </Link>
                <Link to="/project" className='aStyle'>
                  <p>Resturants</p>
                </Link>
                <Link to="/more" className='aStyle'>
                  <p>Foods</p>
                </Link>
                <Link to="/contact" className='aStyle'>
                  <p>Contact</p>
                </Link>
            </div>
            <div className='flex'>
                <button>Get Started</button>
            </div>
          </div>
        </div>
  )
}
