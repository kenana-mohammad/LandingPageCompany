import React, { useEffect } from 'react'
import './Contact.css'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import AOS from "aos";
import "aos/dist/aos.css";
function Contact() {
    useEffect(() => {
        AOS.init({
        });
      }, []);
  return (
<div className='margin-top-section'>
<div className='km-contact' >
       <div className="section-contact" data-aos="zoom-in-up"

data-aos-duration="500">
       <h1 className='title-contact'> contact Us</h1>
       <p>Address</p>
       <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit</span>
       <div className='list'>
        <FaLocationDot />
         <span>Tartus,syria</span>
</div>

<div className='list'>
        <MdEmail/>
        <span>+96432156789</span>

       </div>
       <div className='list'>
        <FaPhone/>
        <span>test@test.com</span>


       </div>
       </div>
       <div className="form-contact" data-aos="zoom-in"      data-aos-easing="ease-in-back"


data-aos-duration="2000" >
           <form action="">
            <label htmlFor="">name</label>
            <input type="text"  />
            <label htmlFor="">email</label>
            <input type="email"  />
            <label htmlFor="">password</label>
            <input type="password"  />
            <input type="checkbox"className='check' value="" checked/>
            <label for="vehicle1"> I Like it?</label>
            <button className='contact-btn'> send</button>

           </form>
       </div>

</div>
    </div>
  )
}

export default Contact
