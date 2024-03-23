import React from 'react'
import img1 from './image/IMG_20191211_111322_428.jpg';

export default function  () {
  return (
    <div>
        <div className="sidmain">
            <div className='myImage'>
                <img src={img1} alt="" />
            </div>
            <h2>Preyesh Dhar Diwan</h2>
            <div>
                <p>Hello World</p>
            </div>
            <hr />
            <div>
                <div className='iconBox'>
                <i class="fa-solid fa-earth-americas"></i>
                </div>
                <div>
                <p>AGE</p>
                <p>25 years old</p>
                </div>
            </div>
            <div>
                <div className='iconBox'>
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                <p>AGE</p>
                <p>25 years old</p>
                </div>
            </div>
            <div className='contantBox'>
                <div className='iconBox'>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div>
                <p>AGE</p>
                <p>25 years old</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}
