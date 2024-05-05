// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import './Testimia.css'
import arrow3 from '../../assets/arrow-left.svg'
import arrow2 from '../../assets/arrow.svg'
import user from '../../assets/User.png'

const Testimia = () => {

    const sidebar = useRef();
    let tx = 0;

    const SlideForward = () => {
        if (tx > -50) { // Adjusted value for sliding forward
            tx -= 25;
        }
        sidebar.current.style.transform = `translateX(${tx}%)`;
    }
    
    const SlideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        sidebar.current.style.transform = `translateX(${tx}%)`; 
    }
    

  return (
    <div className="Testimia">
        <img src={arrow3} alt="" className='Back-btn' onClick={ SlideBackward}/>
        <img src={arrow2} alt="" className='Next-btn' onClick={SlideForward}/>
        <div className="sidebar">
            <ul ref={sidebar}>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user} alt="" />
                            <div>
                                <h3>Dexo xomon</h3>
                                <span>lrom1</span>
                            </div>
                        </div>
                        <p>ipsum dolor sit amet consectetur adipisicing elit. Qui magnam repudiandae quis ducimus esse nulla, iure iusto nemo sit velit ad asperiores corrupti commodi tempora reiciendis autem necessitatibus aperiam enim.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user} alt="" />
                            <div>
                                <h3>Dexo xomon</h3>
                                <span>lrom2</span>
                            </div>
                        </div>
                        <p>ipsum dolor sit amet consectetur adipisicing elit. Qui magnam repudiandae quis ducimus esse nulla, iure iusto nemo sit velit ad asperiores corrupti commodi tempora reiciendis autem necessitatibus aperiam enim.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user} alt="" />
                            <div>
                                <h3>Dexo xomon</h3>
                                <span>lrom3</span>
                            </div>
                        </div>
                        <p>ipsum dolor sit amet consectetur adipisicing elit. Qui magnam repudiandae quis ducimus esse nulla, iure iusto nemo sit velit ad asperiores corrupti commodi tempora reiciendis autem necessitatibus aperiam enim.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user} alt="" />
                            <div>
                                <h3>Dexo xomon</h3>
                                <span>lrom4</span>
                            </div>
                        </div>
                        <p>ipsum dolor sit amet consectetur adipisicing elit. Qui magnam repudiandae quis ducimus esse nulla, iure iusto nemo sit velit ad asperiores corrupti commodi tempora reiciendis autem necessitatibus aperiam enim.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimia