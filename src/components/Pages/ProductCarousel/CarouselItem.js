import React from 'react'
import classes from './ProductCarousel.module.css'

export const CarouselItem = ({item})=>{

    const handleClick = (url) =>{
        window.location.href = url
    }

    return <div className={classes.carouselItem}>
        {/* <div></div> */}
        <img className={classes.carouselImage} src={item.icon} />
        <div className={classes.carouselData}>
        <div className={classes.carouselText}>{item.description}</div>
        <button onClick={()=>handleClick(item.url)}>Stream Now</button>
        </div>
    </div>

}