import React from 'react'
import './Components.css'

const LeftImage = (props) => {
  return (
    <>
        <div className="mainData">
            <div className="left">
                <div className="left-top">
                    <img src={props.smallIcon}/>
                </div>
                <h3>{props.title}</h3>
                <p>{props.subDetail}</p>
                
                <div className='details-box'>
                    {props.details}
                </div>
            </div>
            <div className="right">
                <img src={props.rightImage} />
            </div>
        </div>
    </>
  )
}

export default LeftImage
