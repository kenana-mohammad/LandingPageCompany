import React from 'react'
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import "./Footer.css"
function Footer() {
  return (
    <div className='footer'>
        <h1>follow us</h1>
        <div className="icon-footer">
            <div className="icon-list">
            <a href=""> <span><FaFacebookF /></span> </a> 

            </div>
            <div className="icon-list">
            <a href=""><span><FaTwitter /></span></a>  

            </div> <div className="icon-list">
            <a href=""><span><FaGooglePlusG /></span></a> 

            </div> <div className="icon-list">
            <a href=""><span><FaInstagram /></span> </a> 

            </div> <div className="icon-list">
            <a href=""><span><FaLinkedinIn/></span></a> 

            </div>
        </div>
    </div>
  )
}

export default Footer