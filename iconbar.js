import React from 'react'
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { GiIsland } from "react-icons/gi";
import { TfiHome  } from "react-icons/tfi";
import { IoIosSnow } from "react-icons/io";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { GiGreenhouse } from "react-icons/gi";
import { RiCaravanLine } from "react-icons/ri";
import { FaRedditAlien} from "react-icons/fa";
import { MdKayaking} from "react-icons/md";
import { MdOutlineMapsHomeWork} from "react-icons/md";
import { GiPalmTree} from "react-icons/gi";
import { MdSurfing } from "react-icons/md";
import { MdOutlineAttractions } from "react-icons/md";
import { GiMountainCave } from "react-icons/gi";
import { GiAbstract003 } from "react-icons/gi";
import { GiTreeGrowth } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";

function IconBar(){

return <div className="iconBar">
            
                <div className='iconlist'>
                    <div className='column'>
                        <div><TfiHome className='icon'/></div>
                        <span>Tiny Homes</span>
                    </div>
                    <div className='column'>
                        <div><IoIosSnow className='icon'/></div>
                        <span>Arctic</span>
                    </div>
                    <div className='column'>
                        <div><GiGreenhouse className='icon'/></div>
                        <span>A-frames</span>
                    </div>
                    <div className='column'>
                        <div><HiOutlineHomeModern className='icon'/></div>
                        <span>Windmills</span>
                    </div>
            
                    <div className='column'>
                        <div><MdOutlineMapsHomeWork className='icon'/></div>
                        <span>Amazing pools</span>
                    </div>
                    <div className='column'>
                        <div><MdKayaking className='icon'/></div>
                        <span>Lakefront</span>
                    </div>
                    <div className='column'>
                        <div><MdOutlineMapsHomeWork className='icon'/></div>
                        <span>Campers</span>
                    </div>
                    <div className='column'>
                        <div><RiCaravanLine className='icon'/></div>
                        <span>Cabins</span>
                    </div>
                    <div className='column'>
                        <div><FaRedditAlien className='icon'/></div>
                        <span>OMG!</span>
                    </div>
                    <div className='column'>
                        <div><MdOutlineAttractions className='icon'/></div>
                        <span>National Park</span>
                    </div>
                    <div className='column'>
                        <div><GiIsland className='icon'/></div>
                        <span>Islands</span>
                    </div>
                    <div className='column'>
                        <div><GiPalmTree className='icon'/></div>
                        <span>Design</span>
                    </div>
                    <div className='column'>
                        <div><MdSurfing className='icon'/></div>
                        <span>Surfing</span>
                    </div>
                    <div className='column'>
                        <div><GiMountainCave className='icon'/></div>
                        <span>Caves</span>
                    </div>
                    <div className='column'>
                        <div><GiAbstract003 className='icon'/></div>
                        <span>Castles</span>
                    </div>
                    <div className='column'>
                        <div><MdSurfing className='icon'/></div>
                        <span>Skiing</span>
                    </div>
                    <div className='column'>
                        <div><GiTreeGrowth className='icon'/></div>
                        <span>Tropical</span>
                    </div>
                    <div className='column'>
                        <div><IoHomeOutline className='icon'/></div>
                        <span>Mansions</span>
                    </div>

            
            

                </div>



                <div className="filtersection"> 
                    <div><TbAdjustmentsHorizontal className='filtericon'/></div>
                    <div>Filters</div>
                </div>
          
           
         </div>;
    
}

export default IconBar