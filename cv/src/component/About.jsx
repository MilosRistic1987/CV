import React, { useState } from 'react'
import { FaRegAddressCard } from "react-icons/fa"
import AboutModal from '../component/AboutModal'
import PageCounter from '../component/PageCounter'

const About = () => {
    const [aboutModalOpen, setAboutModalOpen] = useState(false)
    const handleAboutModal = () => {
        setAboutModalOpen(true)
    }
    return (
        <div className='aboutWrapp'>
            <AboutModal aboutModalOpen={aboutModalOpen} setAboutModalOpen={setAboutModalOpen} />
            <div className="aboutContentWrapp">
                <div className='aboutContent'>
                    <FaRegAddressCard title='Visit my Profile Card' onClick={() => handleAboutModal()} />
                </div>
                <div className='pageCounter pageCounterRest'>
                    <PageCounter />
                </div>
            </div>
        </div>
    )
}

export default About
