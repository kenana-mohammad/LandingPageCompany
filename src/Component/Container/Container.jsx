import React, { useEffect } from 'react'
import "./Container.css"
import Card from '../Card/Card'
import { card } from '../../services/team'
import { CiCirclePlus } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";

function Container() {
    useEffect(() => {
        AOS.init({
     duration:3000
        });
      }, []);
  return (
    <div className="km-container"  >

    <div className='margin-top-section  '>
    <h1 className='title mb-5'>portifolio</h1>

    <div className="km-container-row portifolio" data-aos="zoom-in"  >
        <div className="head-text" >
            <h3 className='our_work'>our work</h3>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestiae est aliquid quidem, maxime veniam at corrupti quaerat quod et autem deleniti repellendus fugit consequuntur in, molestias dolorum cum enim.

            </p>
        </div>
        <div className="card-portifolio">
         <Card card={card}/>
        </div>
    </div>
    <div className="icon">
    <CiCirclePlus />

    </div>
    </div>
    </div>
  )
}

export default Container
