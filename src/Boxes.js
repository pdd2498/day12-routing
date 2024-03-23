import React from 'react'

export default function Boxes(pro) {
  return (
    <div className='width40'>
        <div className='textAriya'>
        <p id='textgap'>{pro.text}</p>
        </div>
        <div className='flexd'>
            <img id='profilePic' src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="" />
            <div>
                <h4>Gladis Lennon</h4>
                <p>Head of SEO</p>
            </div>
        </div>
    </div>
  )
}
