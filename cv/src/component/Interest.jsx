import React from 'react'
import InterestCard from './InterestCard'
import interestData from '../data/interests.json'
import PageCounter from '../component/PageCounter'


const Interest = () => {
    return (
        <div className='interestWrapp'>
                 <div className="interestContentWrapp">
                     <div className="interestCardList">
                         {interestData.map(el=><InterestCard cardData={el} key={el.id}/>)}
                         <div className="interestHeading">
                             <div>
                             <h1>In a <span>free</span> time ...</h1>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Recusandae id quia numquam inventore nam, veritatis, eos vero consectetur officiis!<br></br> Voluptatum nulla nemo, ex ipsam nesciunt voluptate molestiae, tempore magnam quibusdam?</p>
                             </div>
                         </div>
                     </div>
                     <div className='pageCounter pageCounterRest'>
                         <PageCounter/>
                     </div>
                 </div>
        </div>
    )
}

export default Interest
