import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import "./Navbar.css"
import { MdArrowDropDown } from 'react-icons/md'
export default function Navbar() {
  const [menu,setmenueActive]=useState(false)
  return (
    <div className='km-nav'>
    <div className="km-logo">
    <span className='km-icon'><FaHome/></span>
<h6 className='title-nav'>logo</h6>
    </div>


        <div className="item-nav">

        <ul>
        <li>team</li>
        <li>work</li>
        <li>price</li>
        <li>content</li>
        <li>DropDown <MdArrowDropDown />
        <ul className='dropdown'>
         <li>item1</li>
         <li>item2</li>
         <li>item3</li>
        </ul>
</li>
          
      </ul>
     
       
        </div>
 

       <div className='login'>
        <a href="">login</a>
        <a href="">Register</a>

       </div>
       <button className="km-menu-btn" onClick={()=>setmenueActive(prev => !prev) } >

           <i className={(menu)?"fa-solid fa-xmark":"fa-solid fa-list"}></i>
       </button>
           
       <div className={(menu)?"menu active":"menu"}>
        <ul>
        <li>team</li>
        <li>work</li>
        <li>price</li>
        <li>content</li>
        <li>DropDown</li>
        </ul>
       </div>
</div>

      

  )
}
