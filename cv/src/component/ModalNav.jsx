import React from 'react'

const ModalNav = ({selectedProjetcsCategory, setSelectedProjetcsCategory}) => {

    const handleCategory=(category)=>{
        setSelectedProjetcsCategory(category)
    }
    return (
        <div className='modalNav'>
            <div className='modalNavLinks'><h1 onClick={()=>handleCategory('All')}>All</h1></div>
            <div className='modalNavLinks'><h1 onClick={()=>handleCategory('React JS')}>React JS</h1></div>
            <div className='modalNavLinks'><h1 onClick={()=>handleCategory('Adobe')}>Adobe</h1></div>
            <div className='modalNavLinks'><h1 onClick={()=>handleCategory('Html5/Css3')}>Html5/Css3</h1></div>
            <div><h1></h1></div>
        </div>
    )
}

export default ModalNav
