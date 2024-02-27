import React from 'react'
import classes from './ProductView.module.css'
import Heading from "../../Assests/Heading.svg"
import AppleLogo from '../../Assests/AppleLogo.png'

const ProductView = () => {
    const handleLink = (url) => {
        window.location.href = url;
      };
    return (
        <div className={classes.ProductViewContainer}>
            <div className={classes.ProductViewWrapper}>
                <div className={classes.ProdutA}>
                    <img src={Heading} alt="Apple" />
                    <h5>Smarter.Brighter.Mightier.</h5>
                    <div className={classes.ctaLinks}>
                        <button onClick={()=>handleLink('https://www.apple.com/apple-watch-series-9/')}>Learn more</button>
                        <button onClick={()=>handleLink('https://www.apple.com/shop/buy-watch/apple-watch')}>Buy</button>
                    </div>
                </div>
                <div className={classes.ProdutB}>
                    <h1>MacBook Pro</h1>
                    <h3>Mindblowing.Head-turning.</h3>
                    <div className={classes.ctaLinks}>
                        <button onClick={()=>handleLink('https://www.apple.com/macbook-pro/')}>Learn more</button>
                        <button onClick={()=>handleLink('https://www.apple.com/shop/buy-mac/macbook-pro')}>Buy</button>
                    </div>
                </div>
            </div>
            <div className={classes.ProductViewWrapper}>
                <div className={classes.ProdutC}>
                <h1>iPad</h1>
                    <h3>Lovable.Drawable.Magical.</h3>
                    <div className={classes.ctaLinks}>
                        <button onClick={()=>handleLink('https://www.apple.com/ipad-10.9/')}>Learn more</button>
                        <button onClick={()=>handleLink('https://www.apple.com/ipad-10.9/')}>Buy</button>
                    </div>
                </div>
                <div className={classes.ProdutD}>
                <h1>Airpods Pro</h1>
                    <h3>Adaptive Audio.Now playing.</h3>
                    <div className={classes.ctaLinks}>
                        <button onClick={()=>handleLink('https://www.apple.com/airpods-pro/')}>Learn more</button>
                        <button onClick={()=>handleLink('https://www.apple.com/shop/product/MTJV3AM/A/airpods-pro')}>Buy</button>
                    </div>
                </div>
            </div>
            <div className={classes.ProductViewWrapper}>
                <div className={classes.ProdutE}>
                <h1><img src={AppleLogo} />Card</h1>
                    <h3>Get up to 3% Daily Cash Back with every purchase.</h3>
                    <div className={classes.ctaLinks}>
                        <button onClick={()=>handleLink('https://www.apple.com/apple-card/')}>Learn more</button>
                        <button onClick={()=>handleLink('https://card.apple.com/apply/application?referrer=cid%3Dapy-200-10000036&start=false')}>Apply Now</button>
                    </div>
                </div>
                <div className={classes.ProdutF}>
                <h1><img src={AppleLogo} />Trade In</h1>
                    <h3>Get $180-$620 in credit when you trade iPhone 11 or higher</h3>
                    <div className={classes.ctaLinks}>
                        <button onClick={()=>handleLink('https://www.apple.com/shop/trade-in')}>See what your device is worth</button>
                        {/* <button>Buy</button> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductView