import React from 'react'
import AirbnbChild from './airbnb-child'


const lists=[
    {image:"./airbnb-img/img1.webp", location:"South Haven, Michigan", rate:"4.78", distance:"88 miles away", date:"Dec 5-10", price:"$785 night"},
    {image:"./airbnb-img/img2.webp", location:"Antioch, Illinois", rate:"4.22", distance:"342 miles away", date:"Oct 4-20", price:"$255 night"},
    {image:"./airbnb-img/img3.webp", location:"Vilas, North Caroline", rate:"3.58", distance:"58 miles away", date:"Nov 5-14", price:"$545 night"},
    {image:"./airbnb-img/img4.webp", location:"Michiana, Michigan", rate:"4.50", distance:"120 miles away", date:"Jan 28-29", price:"$120 night"},
    {image:"./airbnb-img/img5.webp", location:"La Porte, Indiana", rate:"3.24", distance:"42 miles away", date:"Dec 3-10", price:"$132 night"},
    {image:"./airbnb-img/img6.webp", location:"Coloma, Michigan", rate:"5.00", distance:"90 miles away", date:"Mar 17-190", price:"$250 night"},
    {image:"./airbnb-img/img7.webp", location:"Buchahan, Michigan", rate:"3.24", distance:"35 miles away", date:"Feb 5-10", price:"$424 night"},
    {image:"./airbnb-img/img8.webp", location:"Trevor, Wisconsin", rate:"4.56", distance:"56 miles away", date:"Dec 3-5", price:"$353 night"},
    {image:"./airbnb-img/img7.webp", location:"Buchahan, Michigan", rate:"3.24", distance:"35 miles away", date:"Feb 5-10", price:"$424 night"},
    {image:"./airbnb-img/img8.webp", location:"Trevor, Wisconsin", rate:"4.56", distance:"56 miles away", date:"Dec 3-5", price:"$353 night"}
]

const AirbnbParent=()=>{
    return(
        <div className='parentContainer2'>
            {lists.map((list, listIdx)=>{
                return(
                    <AirbnbChild listInfo={list} listIdx={listIdx}
                    key={listIdx}/>
                )
            })}
        </div>
    )

}

export default AirbnbParent



