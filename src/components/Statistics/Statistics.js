import React from 'react';
import './Statistics.scss'

const Statistics = () => {
  return (
    <div className="stats_wrapper">
      <div className="user_row">
        <div className="stat">
          <div>Username:<span>Jahanvi</span></div>
        </div>
        <div className="stat">
        <div>Last 7 days:<span>5 images processed</span></div>
        </div>
        <div className="stat">
        <div>Last 30 days:<span>20 images processed</span></div>
        </div>
      </div>
    </div>
  )
}

export default Statistics