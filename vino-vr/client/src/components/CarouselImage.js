import React from 'react'
import FavBtn from './FavBtn'

const CarouselImage =({altValue, imgSrc, name})=> {

    return (
        <div className='carousel-card' style={{padding: 8, position: 'relative', marginLeft:'25px'}}>
            <img
            alt={altValue}
            src={imgSrc}
            style={{width: '80%'}}
            // width="1600"
            height="600"
            // className="d-inline-block align-top"
            />
             <FavBtn name={name} />
           
         </div>
    )
}

export default CarouselImage