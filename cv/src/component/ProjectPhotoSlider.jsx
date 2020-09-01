import React from 'react'
import { BiWindowClose } from "react-icons/bi"
import Slideshow from '../component/Slideshow'

const ProjectPhotoSlider = ({photoSliderOpen,setPhotoSliderOpen,photos}) => {
    const sliderClasses=  photoSliderOpen ?  "projectPhotoSlider" : "modalDisplayNone"
    const handleClose=()=>{
        setPhotoSliderOpen(false)
    }

    return (
        <div className={sliderClasses}>
            <BiWindowClose className='sliderModalCloseBtn' onClick={()=>handleClose()}/> 
          <Slideshow photos={photos}/>
        </div>
    )
}

export default ProjectPhotoSlider
