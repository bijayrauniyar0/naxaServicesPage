import React from 'react';
import './Components.css';

const LeftImage = (props) => {
  return (
    <>
        <div className="mainData">
            <div className="right">
                <img src={props.rightImage} alt="Right Image" />
            </div>
            <div className="left">
                <div className="left-top">
                    <img src={props.smallIcon} alt="Small Icon" />
                </div>
                <h3 dangerouslySetInnerHTML={{ __html: props.title }} />
                <p dangerouslySetInnerHTML={{ __html: props.subDetail }} />
                <div className="details-box" dangerouslySetInnerHTML={{ __html: props.details }} />
            </div>

        </div>
    </>
  );
};

export default LeftImage;
