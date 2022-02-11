import React from 'react'
import img from '../../img/mouse-log.jpg'
import img1 from '../../img/mouse-log1.jpg'
import img2 from '../../img/mouse-log2.jpg'
import img3 from '../../img/mouse-log3.jpg'
import './Mouses.css'


const Mouses = () => {
    return (
        <div className="section__renovate">
            <h2 className="section__renovate--texto">#HyperX</h2>
                <div className="renovate">
                    <img src={img} alt=""/>
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    <img src={img3} alt=""/>
                </div>
        </div>
    )
}

export default Mouses
