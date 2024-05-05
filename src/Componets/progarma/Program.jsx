// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Program.css'
import Programer_1 from '../../assets/Programer_1.jpg'
import Programer_2 from '../../assets/Programer_2.jpg'
import Programer_3 from '../../assets/Programer_3.jpg'
import view from '../../assets/view.svg'

const Program = () => {
  return (
    <div className="contaienr1">
            <div className='Programs' id='progarma'>
        <div className="Program">
            <img src={Programer_1} alt="" />
            <div className="caption1">
                <img src={view} alt="" />
                <p>Complate</p>
            </div>
        </div>
        <div className="Program">
            <img src={Programer_2} alt="" />
            <div className="caption1">
                <img src={view} alt="" />
                <p>Complate</p>
            </div>
        </div>
        <div className="Program">
            <img src={Programer_3} alt="" />
            <div className="caption1">
                <img src={view} alt=""/>
                <p>Complate</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Program