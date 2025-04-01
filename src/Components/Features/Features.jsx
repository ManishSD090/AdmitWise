import React from 'react'
import './Features.css'
import feature_1 from '../../assets/feature_1.jpeg'
import feature_2 from '../../assets/feature_2.jpg'
import feature_3 from '../../assets/feature_3.jpeg'

const Features = () => {
  return (
    <div className='Features'>
      <div className="feature">
        <img src={feature_1} alt="" />
        <div className="caption">
            <img src="" alt="" />
            <p>Profile Analysis</p>
        </div>
      </div>
      <div className="feature">
        <img src={feature_2} alt="" />
        <div className="caption">
            <img src="" alt="" />
            <p>Admission Probability</p>
        </div>
      </div>
      <div className="feature">
        <img src={feature_3} alt="" />
        <div className="caption">
            <img src="" alt="" />
            <p>College Match Recommendations</p>
        </div>
      </div>
    </div>
  )
}

export default Features
