import React from 'react'

const ProgressBar = ({progressData}) => {
    let {name, progress}=progressData
    return (
        <div className='progressBar'>
            <div className='progress' style={{width:`${progress}`}}>
                <h4>{name}</h4>
            </div>
        </div>
    )
}

export default ProgressBar

