import React,{useState} from 'react'
import ProjectPhotoSlider from '../component/ProjectPhotoSlider'



const ProjectCard = ({cardData}) => {
    let { name, link, desc, photoUrl,category } = cardData;
     const [first, rest]=photoUrl
     const [photoSliderOpen,setPhotoSliderOpen]=useState(false)
   
    const handleSlider=()=>{
        setPhotoSliderOpen(true)
    }
   
    return (
        <div className='projectCard'>
              <ProjectPhotoSlider photoSliderOpen={photoSliderOpen} setPhotoSliderOpen={setPhotoSliderOpen} photos={photoUrl} />
            <div className='projectPhoto'>
                <img src={require("../utilites/projectsImg"+first)} alt='background'  />
                <div className="overlay">
                    <div onClick={()=>handleSlider()} title='Click to see Image Gallery for this project'>
                        <h1>See more</h1>
                    </div>
                </div>
            </div>
            <div >
                <h1>{name}</h1>
            </div>
            <div >
                <h2>{category}</h2>
            </div>
            <div className='cardParagWrapp'>
                <p>{desc}</p>
            </div>
            <div>
    {category==='Adobe'? null:<a href={link} target='_blank' rel="noopener noreferrer" title='Visit GitHub to clone repositories'>Go to gitHub</a>}
            </div>
        </div>
    )
}

export default ProjectCard
