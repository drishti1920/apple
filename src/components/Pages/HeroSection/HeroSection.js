import React from 'react'
import classes from "./HeroSection.module.css"


const HeroSection = () => {
  return (
    <div className={classes.MainSection}>
        <h1>iPhone 15 Pro</h1>
        <h5>Titanium. So strong. So light. So pro.</h5>
        <div className={classes.ctaLinks}>
         <button>Learn more</button> 
         <button>Buy</button> 
        </div>
    </div>
  )
}

export default HeroSection