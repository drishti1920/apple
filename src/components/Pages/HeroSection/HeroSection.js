import React from 'react'
import classes from "./HeroSection.module.css"


const HeroSection = () => {
  return (
    <div className={classes.MainSection}>
        <h1>iPhone 15 Pro</h1>
        <h5>Titanium. So strong. So light. So pro.</h5>
        <div>
        <h6>Learn more</h6>
        <h6>Buy</h6>
        </div>
    </div>
  )
}

export default HeroSection