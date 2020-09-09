import React from 'react'
import profile from '../utilites/img/profile.png'
import ProgressBar from '../component/ProgressBar'
import skillsData from '../data/skills.json'

const ProfileCard = () => {
    return (
        <div className='profileCard'>
            <div className="imgDataWrapp">
                <div>
                    <img src={profile} alt='profilePhoto' />
                </div>
                <div className='infoProfileCardWrapp'>
                    <h4>name</h4>
                    <h1>Milos Ristic</h1>
                    <h4>phone</h4>
                    <h1>+381637597028</h1>
                    <h4>email</h4>
                    <h1>risticmilos1987@gmail.com</h1>
                    <h4>skype</h4>
                    <h1>live:.cid.62556915a830442e</h1>
                </div>
            </div>
            <div className="skillsEducationWrapp">
                <div className='seSign'>
                    <h1>Skills</h1>
                </div>
                <div className='progressWrapp'>
                    {skillsData.map(el => <ProgressBar key={el.id} progressData={el} />)}
                </div>
            </div>
            <div className="skillsEducationWrapp">
                <div className='seSign'>
                <h1>Education</h1>
                </div>
                <div className='educationContentWrapp'>
                    <h1>IT <span>Bootcamp</span><br></br>Web Development<br></br>React JS<br></br>Jan 2020-Apr 2020<br></br>Belgrade</h1>
                    <h1>Faculty of <span>Geography</span><br></br>2006-<br></br>Belgrade</h1>
                    <h1><span>Gymnasium</span> Kursumlija<br></br>2002-2006<br></br>Kursumlija</h1>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
