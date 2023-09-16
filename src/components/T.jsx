import React from 'react';

import './t.css'

const Tjs = () => {
  return (
    <div className="solar-system">
      <div className="solar-planets">
        <div className="sun planet"></div>
        <div className="marcury-section planet">
          <div className="marcury"></div>
        </div>
        <div className="venus-section planet">
          <div className="venus"></div>
        </div>
        <div className="earth-section  planet">
          <div className="earth"></div>
        </div>
        <div className="mars-section planet">
          <div className="mars"></div>
        </div>
        <div className="jupitar-section planet">
          <div className="jupitar"></div>
        </div>
      </div>
    </div>
  )
}

export default Tjs;