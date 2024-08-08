import React, { useEffect } from 'react'
import "./Card.css"
import AOS from "aos";
import "aos/dist/aos.css";
function Card({card}) {
    useEffect(() => {
        AOS.init({     duration:3000


        });
      }, []);
  return (
<div className='km-card'>
{card.map((element)=>{
        return(
            <div className="card-iteam"    data-aos="fade-up"  data-aos-delay="60"
>
            <img src={element.image}  alt="" className='km-img-card' />
            <div className="card-head">
     <h1 className='card-title'>{element.title}</h1>
     <p className='card-description'>{element.description}</p>
            </div>
        </div>
        )
    })}
</div>




  )
}

export default Card
