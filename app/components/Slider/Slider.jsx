"use client";

import React , {useState , useEffect , useRef} from 'react'

import { motion } from 'framer-motion';
import { TiArrowLeftThick , TiArrowRightThick } from 'react-icons/ti';

import Style from "./Slider.module.css"
import SliderCard from './SliderCard/SliderCard';

const Slider = () => {

  const [width, setwidth] = useState(0);

  const dragSlider = useRef();

  const sliderArray = [1,2,3,4,5,6]

  useEffect(() => {
    setwidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  })

  const handleScroll = (dir) => {
    const {current} = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    switch (dir ){

      case "left":
        current.scrollLeft -=  scrollAmount
        

      case 'right':
        current.scrollLeft += scrollAmount
    }
  }

  return (
    <div className={Style.Slider}>
      <div className={Style.Slider_box}>

        <div className={Style.Slider_box_button}>
          <p>Click on play Icon and Enjoy NFTs</p>
          <div className={Style.Slider_box_button_btn}>
            <div className={Style.Slider_box_button_btn_icon} >
            <TiArrowLeftThick onClick={() => handleScroll("left")} />
            </div>

            <div className={Style.Slider_box_button_btn_icon} >
            <TiArrowRightThick onClick={() => handleScroll("right")} />
            </div>
          </div>
        </div>

        <motion.div className={Style.Slider_box_items} ref={dragSlider} >
          <motion.div 
          ref={dragSlider} 
          className={Style.Slider_box_item} 
          drag="x" 
          dragConstraints={{right:0 , left :  -width}} >
            {
              sliderArray.map((el , i) => (
                <SliderCard key={i + 1} el={el} i={i} /> 
              ))
            }
          </motion.div>

        </motion.div>

      </div>



    </div>
  )
}

export default Slider