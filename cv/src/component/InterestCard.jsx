import React from 'react'

const InterestCard = ({cardData}) => {
    let {title, img}=cardData
    const area = img.split('.')[0].substring(1)
    console.log(area)
    return (
     
            <div className="interestCard" style={{gridArea:area}}>
                <div className="interestPhoto">
                    <img src={require("../utilites/interestImg"+img)} alt='rock' />
                </div>
                <div className="interestTitle">
                    <h1>{title}</h1>
                </div>
            </div>
     
    )
}

export default InterestCard
