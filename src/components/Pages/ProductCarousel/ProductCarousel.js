import React, { useState } from 'react'
import classes from './ProductCarousel.module.css'
import {CarouselItem} from './CarouselItem'

const ProductCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const items =[{
        description:'Blah Blah',
        icon: require('../../Assests/CarouselImg1.svg').default,
        url:'apple.com'
    },
    {
        description:'Blah Blah',
        icon: require('../../Assests/CarouselImg1.svg').default,
        url:'apple.com'
    },
    {
        description:'Blah Blah',
        icon: require('../../Assests/CarouselImg1.svg').default,
        url:'apple.com'
    }
]

  return (
    <section className={classes.carouselWrapper}>
    <div className={classes.carousel}>
      {/* <div className={classes.inner}
      style={{ transform: `translate:(-${activeIndex * 100})` }}
      > */}
      {items.map((item)=>{
        return <CarouselItem item={item} />
      })}   
      {/* </div> */}
    </div>
    </section>
  )
}

export default ProductCarousel