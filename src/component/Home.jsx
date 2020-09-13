import React, { useEffect, useState } from 'react'
import { FaLinkedin } from "react-icons/fa"
import PageCounter from '../component/PageCounter'

const Home = () => {
    const heading = [ { title: <h1>I'm <span>Milos</span> Ristic</h1>, id: 0 },{ title: <h1>Welcome to my <span>CV</span> </h1>, id: 1 }, { title: <h1>Have a nice time</h1>, id: 2 }];
    const [title, setTitle] = useState(heading[0])

 
    
    useEffect(() => {
        const interval = setInterval(() => {
            let id;
            if (title.id + 1 <= heading.length - 1) {
                id = title.id + 1
            } else {
                id = 0
            }
            setTitle(heading[id])

        }, 5000)
        return () => {
            clearInterval(interval)
        }
    }, [title])
    return (
        <div className='homeWrap' >
            <div className="contentWrapp">
                <div className="headingWrapp">
                    <a className='linkedinIco' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/milos-ristic-410b95195/'><FaLinkedin title='Visit my Linkedin profile' /></a>
                    <div className='animationWrapp'>
                        {title.title}
                        <p>Non progredi est regredi!<br /> Si fueris Romae, Romano vivito more, si fueris alibi, vivito sicut ibi!<br></br> Unusquisque suae fortunae faber es!</p>
                    </div>
                </div>
                <div className='pageCounter pageCounterRest'>
                    <PageCounter pageNumber={"01"}/>
                </div>
            </div>
        </div>
    )
}

export default Home
