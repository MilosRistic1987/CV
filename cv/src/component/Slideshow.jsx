import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = ({photos}) => {
    return (
        <div className="slide-container">
            <Zoom scale={0.4}>
          {
            photos.map((each, index) => <img key={index} style={{width: "100%"}} src={require("../utilites/projectsImg"+each)} />)
          }
        </Zoom>
            
        </div>
    )
}

export default Slideshow