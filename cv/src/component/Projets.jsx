import React,{useState} from 'react';
import NavBar from '../component/NavBar';
import ProjetsModal from '../component/ProjetsModal'


const Projects = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const handleModalOpen=()=>{
        setModalOpen(true)
    }
    return (
        
         
        <div className='projectWrapp'>
               <ProjetsModal isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
            <div className='borderWrapp'>
                <NavBar />
                <div className="projetsInfoWrapp">
                    <div></div>
                    <div className='projectInfo'>
                        <div>
                        <h1>Welcome To <span>Projects</span> room</h1>
                        <button className='mainBtn' onClick={()=>handleModalOpen()}>See all projects</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
}

export default Projects
