import React from 'react'
import { MdOutlineDone } from "react-icons/md";

export default function CardPrice({price}) {
  return (
    <>
    {price.map((element)=>{
        return(
<div className="card-price" data-aos="fade-up" data-aos-duration="3000">
    <div className={(element.visiable)?"pro visiable ":"pro none"}>
    <h3>pro</h3>
    </div>
    <div className='row-table'>

            <h1>50GB</h1>
            <p>storage</p>
   </div>
          <div className='row-table'>
            <h1>50GB</h1>
            <p>storage</p>
          </div>

          <div className='row-table'>
            <h1>50GB</h1>
            <p>storage</p>
          </div>

          <div className='row-table'>
            <h1>50GB</h1>
            <p>storage</p>
          </div>

          <div className='row-table-reverce'>
            <div className="row-t">
            <h1>{element.num}</h1>
            <p>{element.number}</p>
            </div>
                           <div className="rev">
              <p>{element.name}</p>
            </div>

                       </div>
                       <div className="card-footer-price">
                       <button className='btn-price'> <MdOutlineDone />
sign up</button>
                       </div>


   </div>
        )
    })}


    </>


  )
}
