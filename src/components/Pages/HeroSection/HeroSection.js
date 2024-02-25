import React from 'react'
import classes from "./HeroSection.module.css"
import AppleLogo from '../../Assests/AppleLogo.png'

const HeroSection = () => {

  const learnMore = () => {
    window.location.href = 'https://www.apple.com/iphone-15-pro/'
  }

  const buyNow = () => {
    window.location.href = 'https://www.apple.com/shop/buy-iphone/iphone-15-pro'
  }

  const learnmore2 = () => {
    window.location.href = 'https://www.apple.com/iphone-15/'
  }

  const buynow2 = () => {
    window.location.href = 'https://www.apple.com/shop/buy-iphone/iphone-15'
  }

  const learnmoreVision = () =>{
    window.location.href = 'https://www.apple.com/apple-vision-pro/'
  }

  const buyVision = () =>{
    window.location.href = 'https://www.apple.com/shop/buy-vision/apple-vision-pro'
  }




  return (
    <div className={classes.HeroSectionWrapper}>
      <div className={classes.MainSection}>
        <h1>iPhone 15 Pro</h1>
        <h5>Titanium. So strong. So light. So pro.</h5>
        <div className={classes.ctaLinks}>
          <button onClick={learnMore}>Learn more</button>
          <button onClick={buyNow}>Buy</button>
        </div>
      </div>

      <div className={classes.Section2}>
        <h1>iPhone 15</h1>
        <h5>New Camera. New design. Newphoria.</h5>
        <div className={classes.ctaLinks}>
          <button onClick={learnmore2}>Learn more</button>
          <button onClick={buynow2}>Buy</button>
        </div>
      </div>

      <div className={classes.Section3}>
        <div className={classes.Section3Content}>
        <span> <img src={AppleLogo} />  <h1>Vision Pro</h1></span>
        <h5>Welcome to the era of spatial computing.</h5>
        <div className={classes.ctaLinks}>
          <button onClick={learnmoreVision}>Learn more</button>
          <button onClick={buyVision}>Buy</button>
        </div>
        </div>
      </div>



    </div>
  )
}

export default HeroSection