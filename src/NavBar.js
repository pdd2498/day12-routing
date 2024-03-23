import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='navflex'>
        <div className='navgap'>

        </div>
      <ul className='navul'>
        <Link to="/about">
            <li>About</li>
        </Link>
        <Link to="/certificate">
            <li>Certificate</li>
        </Link>
        <Link to="/project">
            <li>Project</li>
        </Link>
        <Link to="/more">
            <li>More</li>
        </Link>
        <Link to="/contact">
            <li>Contact</li>
        </Link>
        
        
        
        
        
      </ul>
    </div>
  )
}
