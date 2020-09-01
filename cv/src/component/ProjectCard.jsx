import React,{useState} from 'react'
import ProjectPhotoSlider from '../component/ProjectPhotoSlider'



const ProjectCard = ({cardData}) => {
    let { name, link, desc, photoUrl, } = cardData;
     const [first, rest]=photoUrl
     const [photoSliderOpen,setPhotoSliderOpen]=useState(false)
   
    const handleSlider=()=>{
        setPhotoSliderOpen(true)
    }
   
    return (
        <div className='projectCard'>
              <ProjectPhotoSlider photoSliderOpen={photoSliderOpen} setPhotoSliderOpen={setPhotoSliderOpen} photos={photoUrl} />
            <div className='projectPhoto'>
                <img src={require("../utilites/projectsImg"+first)} alt='background' onClick={()=>handleSlider()} />
            </div>
            <div >
                <h1>{name}</h1>
            </div>
            <div className='cardParagWrapp'>
                <p>{desc}</p>
            </div>
            <div>
                <a href={link} target='_blank' rel="noopener noreferrer" title='Visit GitHub to clone repositories'>Go to my git</a>
            </div>
        </div>
    )
}

export default ProjectCard
