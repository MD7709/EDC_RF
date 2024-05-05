// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Campus.css"
import Gallr_1 from '../../assets/Gallray_1.jpg'
import Gallr_2 from '../../assets/Gallary_2.jpg'
import Gallr_3 from '../../assets/Gallary_3.jpg'
import Gallr_4 from '../../assets/Gallary_4.jpg'
import arrow2 from '../../assets/arrow.svg'

const Campus = () => {
  return (
    <div className='Campus'>
        <div className='Gallry'>
            <img src={Gallr_1} alt="" />
            <img src={Gallr_2} alt="" />
            <img src={Gallr_3} alt="" />
            <img src={Gallr_4} alt="" />
        </div>
        <button className='btn1'>See More Hear <img src={arrow2} className='arrow' /></button>
    </div>
  )
}

export default Campus