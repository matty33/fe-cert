import React from 'react'

import Style from "./title.module.css"

const Title = ({heading , paragraph}) => {
  return (
   <div className={Style.TITLE}>
        <div className={Style.TITLE_BOX}>
            <h2>{heading}</h2>
            <p>{paragraph}</p>

        </div>
   </div>

  )
}

export default Title