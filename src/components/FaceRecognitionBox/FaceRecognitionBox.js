import React from 'react';
import './FaceRecognitionBox.scss';

const FaceRecognitionBox = ({ imageUrl }) => {
  return (
    <div className="img_wrapper">
      <img alt="face recognition" src={imageUrl} />
    </div>
  )
}

export default FaceRecognitionBox