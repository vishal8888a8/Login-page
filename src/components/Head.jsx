import React from 'react'
import image_source from '../assets/Solid_lines.png'

export default function Head() {
  return (
    <div className='header'>
        <div><img src={image_source} alt="company logo" /></div>
        <div><h3>It's a delight to have you onboard</h3></div>
        <div>
            <p>Help us know you better.</p>
            <p>(This is how we optimize Wobot as per your business needs)</p>
        </div>
    </div>
  )
}
