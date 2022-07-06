import React, { Component } from 'react'
import emailjs from "@emailjs/browser";
import axios from 'axios';
import {SERVER_URL} from '../services/Adminmanagementservice.js';
import Customermanagemntservice from '../services/Customermanagemntservice';
import "../csscomponent/Contactdog.css";

export default class Contactdog extends Component {
  
  sendEmail =(e)=>{
        e.preventDefault();
    
        emailjs
          .sendForm(
           // "replace with service id"
             'service_3ag7res' ,
            //"replace with template id"
            'template_3paq5w7',
            e.target,
            //"replace with user id"
            'IxjsYEV0leptlrE8J'
          )
          .then(
            (result) => {
              console.log(result.text);
              console.log("message sent");
              alert("Message sent")
            },
            (error) => {
              console.log(error.text);
            }
          );
          // reset the form 
          e.target.reset()
      };
  

      
  
    render() {
    return (
      
        <div>

       





   <div className="container border" style={{marginTop:'50px',
   width:'50%',
   backgroundImage:`url('https://thumbs.dreamstime.com/b/white-dog-lies-background-light-wall-muzzle-dogs-yard-151198589.jpg')`,
   backgroundPosition:'center',
   backgroundSize:'cover'}}>
    <h2 style={{marginTop:25, color:'purple', fontFamily:'sans-serif', textAlign:'center'}}>Send Message</h2>
      <form onSubmit={this.sendEmail} className="row" style={{             
        margin:"25px 85px 75px 100px"}}>
    
        <label style={{color:'purple', fontFamily:'sans-serif'}}>Name</label>
        <input type="text" name="uname" className="form-control" />
        
        <label style={{color:'purple', fontFamily:'sans-serif', marginTop:15}}>Email</label>
        <input type="email" name="user_email" className="form-control" />
       
        <label style={{color:'purple', fontFamily:'sans-serif', marginTop:15}}>Message</label>
        <textarea name="message" rows = '4' className="form-control"/>
        
        <input type="submit" value="Send" style={{marginTop:70}} class='contact-btn-submit'/>
      </form>
    </div>

    
    </div>

    
      
    )
  }
}
