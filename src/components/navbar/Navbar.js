import React from 'react'
import "./Navbar.css"
import img1 from "../../assets/gonav.png"
import {GrSearch} from "react-icons/gr"
import {BsQuestionCircleFill} from "react-icons/bs"
import {HiShoppingCart} from "react-icons/hi"
import {FaUserAlt} from "react-icons/fa"

function Navbar() {
  return (
    <div className='navbar'>
        <div className="nav__img">       

        </div>
          <img src={img1} alt="" />
        <p className='p1'>Phones</p>
        <p className='p2'>Earbuds</p>
        <p className='p3'>Watches</p>
        <p className='p4'>Smart Home</p>
        <p className='p5'>Laptops</p>
        <p className='p6'>Accessories</p>
        <p className='p7'>Subscriptions</p>
        <p className='p8'>Offers</p>
        <div className="nav__icon">
        <GrSearch/>
        <BsQuestionCircleFill/>
        <HiShoppingCart/>
        <FaUserAlt/>


        </div>
    </div>
  )
}

export default Navbar