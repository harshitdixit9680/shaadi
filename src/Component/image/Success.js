import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <>
        <section className="success_story">
        <p className="heading_sadilive">Matrimony Service with Millions of Success Stories</p>

        <div className="success_container">
            <div className="client client-1">
                <div className="client-img cl-img-1"></div>
                <div className="client-story">
                    <p>Rajkumar Rao & Patralekha </p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem distinctio iure dicta voluptates omnis corrupti porro aliquam? Expedita, incidunt eos, vitae alias veniam dolore quam non laudantium quis nostrum error!</p>
                    <span> <Link to="#" className="read-more">Read More </Link></span>
                </div>
            </div>
            
            <div className="client client-2">
                <div className="client-img cl-img-2"></div>
                <div className="client-story">
                    <p>Virat & Ansushka </p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem distinctio iure dicta voluptates omnis corrupti porro aliquam? Expedita, incidunt eos, vitae alias veniam dolore quam non laudantium quis nostrum error!</p>
                    <span> <Link href="#" className="read-more">Read More </Link></span>
                </div>
            </div>

            <div className="client client-3">
                <div className="client-img cl-img-3"></div>
                <div className="client-story">
                    <p>Vickey & Katrina </p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem distinctio iure dicta voluptates omnis corrupti porro aliquam? Expedita, incidunt eos, vitae alias veniam dolore quam non laudantium quis nostrum error!</p>
                    <span> <Link to="#" className="read-more">Read More </Link></span>
                </div>
            </div>
        </div>

    </section>
    
    <section class="cta">
        <div class="cta_conrant">Your story is waiting to happen!</div>
        <div class="cta_btn">Get Started</div>
    </section>
    </>
  )
}

export default Success