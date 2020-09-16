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
                             <h1>In  <span>free</span> time ...</h1>
                             <p>Interests and Hobbies are momentous part of my life.<br />Everyday with cup of coffee I spend quality time reading or watching interesting stuff <br></br> About geography, history, art, design...</p>
                             </div>
                         </div>
                     </div>
                     <div className='pageCounter pageCounterRest'>
                         <PageCounter pageNumber={"03"}/>
                     </div>
                 </div>
        </div>
    )
}

export default Interest
