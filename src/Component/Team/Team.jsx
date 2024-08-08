import React, { useEffect } from 'react'
import team1 from "./../../assets/pic-1.png"
import "./Team.css"
import AOS from "aos";
import "aos/dist/aos.css";
function Team({team}) {
    useEffect(() => {
        AOS.init({
     duration:1000
        });
      }, []);
  return (
    <div className='margin-top-section'  data-aos="zoom-in-up" >
        <h1 className='title'>Team</h1>

        <div className="team container">
         { team.map((element)=>{
          return(
            <div className="container-km-team">
            <img src={element.image} alt="" className='img-team'/>
            <h1 className=' text-info-team text-center '>{element.name}</h1>
            <p className='text-center skill-team'>{element.service} </p>
            </div>
          )
         })}



        </div>
    </div>
  )
}

export default Team
