import 'animate.css';
import React from 'react';
import birds1 from '../../assets/images/slider/birds1.png';
import birds2 from '../../assets/images/slider/birds2.png';
import hill from '../../assets/images/slider/hill.png';
import house from '../../assets/images/slider/house.png';
import sun from '../../assets/images/slider/sun.png';
import './Tour.css';
const tour = () => {
    return (
        <section id="home-slider">
            <div className="container">
                <div className="row">
                    <div className="main-slider animate-in">
                        <div className="slide-text">
                            <h1>We Are Creative Nerds</h1>
                            <p>Boudin doner frankfurter pig. Cow shank bresaola pork loin tri-tip tongue venison pork belly meatloaf short loin landjaeger biltong beef ribs shankle chicken andouille.</p>
                        </div>
                        <img src={hill} className="slider-hill" alt="slider" />
                        <img src={house} className="slider-house" alt="slider" />
                        <img src={sun} className="slider-sun" alt="slider" />
                        <img src={birds1} className="slider-birds1" alt="slider" />
                        <img src={birds2} className="slider-birds2" alt="slider" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default tour;