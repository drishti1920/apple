import React from 'react'
import classes from './ProductCarousel.module.css'

export const CarouselItem = ({item})=>{

    const handleClick = (url) =>{
        window.location.href = url
    }

    return <div className={classes.carouselItem}>
        
        <img className={classes.carouselImage} src={item.icon} />
        <div className={classes.carouselData}>
        <button className={classes.streamNowBtn} onClick={()=>handleClick(item.url)}>Stream Now<i class="bi bi-play-circle-fill"></i></button>
        <div className={classes.carouselText}>{item.description}</div>
        </div>
    </div>

}