import React from 'react'
import "./browse.css"
import img1 from "../image/image (1).png"
import img2 from "../image/image (2).png"
import img3 from "../image/image (3).png"
import img4 from "../image/image (4).png"
import img5 from "../image/image (5).png"
import img6 from "../image/image (6).png"
function Browse() {
  return (
    <div className='browser-container'>
         <h2>
        Packed full of free online multiplayer games and a lively community
        </h2>
        <div className='browser-main'>
            
            <img alt='image1' src={img1}/>
            <img alt='image2' src={img2}/>
            <img alt='image3' src={img3}/>
            <img alt='image4' src={img4}/>
            <img alt='image5' src={img5}/>
            <img alt='image6' src={img6}/>
        </div>
       
    </div>
  )
}

export default Browse