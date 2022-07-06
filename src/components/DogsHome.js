import React, { Component } from 'react'
import "../csscomponent/Dogshome.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class DogsHome extends Component {
  render() {
    return (
      <div>
          
        <section class="home" id="home">
          <img src={`${process.env.PUBLIC_URL}/images/home_bg_img.jpg`} className="bk-dog-pic"/>
            <div className="content">
                <h3 className='h3-bkdog'> <span className="span-bkdog">Hi</span> Welcome To Our Pet Play Date </h3>
                <a href="/filtering" className="btn-dogshome" style={{backgroundColor:''}}>Check Dogs</a>
                
            </div>
            
        </section>

        <section class="about-section" id="about-section">

            <div className="image-foodog">
            <img src={`${process.env.PUBLIC_URL}/images/about_img.png`} />
   
            </div>

            <div className="content-about">
                <h3 className='h3-foodog'>Premium <span className="dogfood-span">Pet Food</span> Manufacturer</h3>
                <p className="dog-food-p"> 
                Created with the highest-quality chicken, beef, turkey, and lamb from human-grade farms in the US and Australia. Ollie’s produce,
                seeds, and oils are carefully sourced, with no fillers, artificial flavors, or preservatives.
                We ask pet owners to fill out a short questionnaire, which we’ll then determine which meal plan is best for
                your pooch based on their stage of life, health history, and current needs.</p>
                <a href="#" class="btn-food-section">read more</a>
            </div>
        </section> 
        <section class="about-section">
            <div className="image-foodog">
                <img src={`${process.env.PUBLIC_URL}/images/ball-toy.jpg`}/>
    
            </div>
            <div class="content-about">
                <h3 className= "h3-foodog"> Toy <span className="dogfood-span">Dog </span>Store</h3>
                <p className="dog-food-p">We started this whole operation to serve the people who are just like us: nuts 
                    about dogs. We're "our dogs have more elaborate parties then we do" obsessed. We eat ramen 
                    noodles while our dogs dine on organic grass-fed beef. We are disappointed when our dogs 
                    don't follow us into the bathroom. Our families think it's cause for concern. But who cares 
                    about them? We're here for you and your dog. We've never met your dog, but we know we love them.</p>
                
                <a href="/toylist" className="btn-food-section" style={{backgroundColor:''}}>shop now</a>
            </div>

        </section>    
        <section class="services" id="services">
            <h1 class="heading"> Our <span class="span-services">Services</span> </h1>
                <div class="box-container">
                <div className="box">
                    <i className="fas fa-heart"></i>
                    <h3 class="service-h3">Get Toys</h3>
                    <a href="/toylist" className="btn-food-section">read more</a>
                </div>
                <div class="box">
                    <i class="fas fa-cat"></i>
                    <h3 class="service-h3">Plans</h3>
                    <a href="#" className="btn-food-section">read more</a>
                </div>

                <div class="box">
                    <i class="fas fa-bath"></i>
                    <h3 class="service-h3">Dog reviews</h3>
                    <a href="#" className="btn-food-section">read more</a>
                </div>

                <div class="box">
                    <i class="fas fa-drumstick-bite"></i>
                    <h3 class="service-h3">Healthy meal</h3>
                    <a href="#" className="btn-food-section">read more</a>
                </div>

                <div class="box">
                    <i class="fas fa-baseball-ball"></i>
                    <h3 class="service-h3">Activity exercise</h3>
                    <a href="#" className="btn-food-section">read more</a>
                </div>

                <div class="box">
                    <i class="fas fa-heartbeat"></i>
                    <h3 class="service-h3">Join us</h3>
                    <a href="#" className="btn-food-section">read more</a>
                </div>

            </div>

        </section>
    </div>
    )
  }
}
