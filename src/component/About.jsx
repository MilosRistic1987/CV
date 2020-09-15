import React from 'react'
import { FaRegAddressCard } from "react-icons/fa"
import PageCounter from '../component/PageCounter'
import AbsoluteDiv from './AbsoluteDiv'

const About = ({setAboutModalOpen}) => {
  
    const handleAboutModal = () => {
        setAboutModalOpen(true)
    }

    return (
        <AbsoluteDiv>
        <div className='aboutWrapp'>
            <div className="aboutContentWrapp">
                <div className='aboutContent'>
                    <FaRegAddressCard title='Visit my Profile Card' onClick={() => handleAboutModal()} />
                </div>
                <div className='pageCounter pageCounterRest'>
                    <PageCounter pageNumber={"04"}/>
                </div>
            </div>
        </div>
        </AbsoluteDiv>
    )
}

export default About
