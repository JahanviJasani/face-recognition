import React from 'react';
import './ImageLinkForm.scss';
import right_arrow from './right_arrow.svg';

const ImageLinkForm = () => {
  return (
    <div className="form_wrapper">
      <h2></h2>
      <form className="imagelink_form">
        <div className="form_group">
          <label>Image Link</label>
          <div className="form_inner">
          <input type="text" placeholder="Insert the image link here" className="form_control" />
          <button className="btn submit_btn"><img alt="submit" src={right_arrow} /></button>
          </div>
        </div>
      </form>      
    </div>
  )
}

export default ImageLinkForm