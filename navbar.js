import React from "react";
import { TbWorld } from "react-icons/tb";
import { TbAlignLeft } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";
import { IoSearchCircleSharp } from "react-icons/io5";



function NavParent() {
  return (
    <div className="navBar">
      <div className="firstSection">
        <div className="logo">
          <img src="/airbnb-img/logo.png" width={200} alt="logo" />
        </div>
      </div>

      <div className="secondSection">
        <span>
          <b>Anywhere</b>
        </span>
        <span>
          <b>Any week</b>
        </span>
        <div>
            <div className="logobar">
                <div>Add guests</div>
                <div><IoSearchCircleSharp className="navbar-icon1"/></div>
          </div>
         
        </div>
      </div>
      <div className="thirdSection">
        <div>
          <b>Become a Host</b>
        </div>
        <div >
            <TbWorld className="navbar-icon"/>
        </div>

        <div className="account">
          <div>
            {" "}
            <TbAlignLeft className="navbar-icon" />
          </div>
          <div>
            {" "}
            <MdAccountCircle className="navbar-icon"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavParent;
