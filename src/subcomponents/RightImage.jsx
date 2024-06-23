import React from 'react'
import './Components.css'

const RightImage = (props) => {
  return (
    <>
        <div className="mainData">
            
            <div className="right">
                <img src={props.rightImage} />
            </div>
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
        </div>
    </>
  )
}

export default RightImage
