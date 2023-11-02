import React from "react";
import './Track.css';

function Track(props) {

    const buttonToggle = () => {
       if (this.props.isRemoval) {
        return <button className="Track-action">-</button>
       } else {
        return <button className="Track-action">+</button>
       }
    }
    
    
    // if (this.props.isRemoval) {
    //     return <button>-</button> 
    // } else {
    //     return <button></button>
    // };

    return (
        <>
            <div className="Track">
                <div className="Track-information" >
                    {/* <h3></h3> */}
                    {/* <p></p> */}
                </div>
                {buttonToggle}
            </div>
       </> 
    );
    }

export default Track;