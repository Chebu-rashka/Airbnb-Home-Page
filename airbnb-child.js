import React from "react";

const AirbnbChild=(props)=>{
    const image=props.listInfo.image
    const location=props.listInfo.location
    const rate=props.listInfo.rate
    const distance=props.listInfo.distance
    const date=props.listInfo.date
    const price=props.listInfo.price

    return (
        <div className="airbnbContainer" >
            <div>
                <img src={image} alt="ene bol airbnb"/> 
            </div>
            <div className="locationSection">
                <p> <b>{location}</b></p>
               <span>&#9733; {rate}</span>
            </div>
            <div className="distanceSection">
                {distance} 
            </div>
            <div className="dateSection">
                {date} 
            </div>
            <div className="priceSection">
            <b>{price}</b> 
            </div>
        
        </div>
    )
}
    export default AirbnbChild