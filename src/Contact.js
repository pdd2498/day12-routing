import React from 'react'

export default function Contact() {
  return (
    <div className='cmainBox'>
       <div className='contBox'>
        <h4>Contact Us</h4>
        <h1>GET IN TOUCH WITH US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique ad odit, inventore nam dignissimos ullam ab, dolorum aliquid veniam corrupti impedit. Ducimus nulla nam alias laborum, error reprehenderit earum?</p>
        <div>
          <div className='flexc'>
            <div>
            <i className="fa-solid fa-house-flag"></i>
            </div>
            <div>
              <h3>Our Location</h3>
              <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
            </div>
          </div>
          
          <div className='flexc'>
            <div>
            <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <h3>Phone Number</h3>
              <p>(+62)81 414 257 9980</p>
            </div>
          </div>
          
          <div className='flexc'>
          <div >
          <i className="fa-solid fa-envelope"></i>
          </div>
          <div>
            <h3>Email Address</h3>
            <p>info@yourdomain.com</p>
          </div>
          </div>
          

        </div>
      </div>
      <div className='contBox'>
        <div className='inputBox'>
            <input className='imp' type="text" name="" id="" placeholder='Your Name' />
            <input className='imp' type="text" name="" id="" placeholder='Your Email' />
            <input className='imp' type="text" name="" id="" placeholder='Your Phone'/>
            <textarea name="" id="jono" cols="30" rows="10" placeholder='Your Message' ></textarea>
            <input className='imp' type="text" name="" id="" />
        </div>
      </div>
    </div>
  )
}
