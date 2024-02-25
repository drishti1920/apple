import React from 'react'
import classes from "./HeroSection.module.css"


const HeroSection = () => {

  const learnMore =()=>{
    window.location.href = 'https://www.apple.com/iphone-15-pro/'
  }

  const buyNow = () => {
    window.location.href = 'https://www.apple.com/shop/buy-iphone/iphone-15-pro'
  }


  return (
    <div className={classes.MainSection}>
        <h1>iPhone 15 Pro</h1>
        <h5>Titanium. So strong. So light. So pro.</h5>
        <div className={classes.ctaLinks}>
         <button onClick={learnMore}>Learn more</button> 
         <button onClick={buyNow}>Buy</button> 
        </div>
    </div>
  )
}

export default HeroSection