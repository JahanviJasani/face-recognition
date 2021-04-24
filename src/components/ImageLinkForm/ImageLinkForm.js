import React from 'react';
import './ImageLinkForm.scss';
import right_arrow from './right_arrow.svg';

const ImageLinkForm = ({onInputChange, onDetect}) => {
  return (
    <div className="form_wrapper">
      <form className="imagelink_form">
        <div className="form_group">
          <label>Image Link</label>
          <div className="form_inner">
          <input 
            type="text" 
            placeholder="Insert the image link here" 
            className="form_control"
            onChange={onInputChange}
          />
          <button className="btn submit_btn" onClick={onDetect}>
            <img alt="submit" src={right_arrow} />
          </button>
          </div>
        </div>
      </form>      
    </div>
  )
}

export default ImageLinkForm