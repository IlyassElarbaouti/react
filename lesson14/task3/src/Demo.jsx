import React, { useState } from 'react'
import Dimension from './Dimensions.jsx';

const Demo = () => {
    const [isVisible,setIsVisible]=useState(false)
    return (
      <div>
        <div className="">
          <button className="btn" onClick={() => setIsVisible(true)}>
            Show
          </button>
          <button className="btn" onClick={() => setIsVisible(false)}>
            Hide
          </button>
        </div>
        {isVisible && <Dimension />}
      </div>
    );
}

export default Demo
