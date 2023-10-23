import React from 'react'

// Internal Import 
import Style from "./button.module.css"
import { ST } from 'next/dist/shared/lib/utils'

const Button = ({btnName, handleClick}) => {
  return (
    <div className={Style.BOX}>
      <button className={Style.BUTTON} onClick={()  => handleClick()} >{btnName}</button>
    </div>
  )
}

export default Button