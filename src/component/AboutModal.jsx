import React from 'react'
import { BiWindowClose } from "react-icons/bi"
import ProfileCard from '../component/ProfileCard'

const AboutModal = ({aboutModalOpen,setAboutModalOpen}) => {
    const aboutModalClassName = aboutModalOpen ? 'AboutModalDisplayFlex' : 'modalDisplayNone';
    const handleAboutModalClose=()=>{
        setAboutModalOpen(false)
    }
    return (
        <div className={aboutModalClassName}>
               <BiWindowClose className='sliderModalCloseBtn' onClick={()=>handleAboutModalClose()}/> 
               <ProfileCard/>
           
        </div>
    )
}

export default AboutModal
