import React, { useEffect } from 'react'
import "./ConatinerPrice.css"
import CardPrice from '../CardPrice/CardPrice';
import { price } from '../../services/team';
import AOS from "aos";
import "aos/dist/aos.css";
function ContainerPrice() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
    <div className='margin-top-section' data-aos="fade-up" data-aos-duration="3000">
    <h1 className='title'>pricing</h1>

    <span className='text-align price-title'>chose apricing plan that fits your need</span>
   </div>
    <div className="km-conatiner-price" data-aos="zoom-in-down" data-aos-duration="2000">



     {/* <div className="card-price">
      <div className="pro">
        <h1>pro</h1>
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
              <h1>$</h1>
              <p>50</p>
              </div>
                             <div className="rev">
                <p>per month</p>
              </div>

                         </div>
                         <div className="card-footer-price">
                         <button className='btn-price'> <MdOutlineDone />
sign up</button>
                         </div>


     </div> */}

         <CardPrice price={price}/>
</div>
    </>


  )
}

export default ContainerPrice
