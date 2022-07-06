import React, { Component } from 'react'
import {SERVER_URL} from '../services/Customermanagemntservice.js';
import Customermanagemntservice from '../services/Customermanagemntservice';


export default class Customerlistalldogs extends Component {

    constructor(props){
        super(props)
        this.state = {
            // initialize an array of dogs
            // this array will be used to make a Rest Api call to our backend and store information we get in this array 
            dogs: this.props.ListDog,           
        };
        
        this.viewDog = this.viewDog.bind(this);
        this.jsEmail = this.jsEmail.bind(this);      
    }

    componentDidMount(){ 
         Customermanagemntservice.getDogs().then((res) =>{
            this.setState({dogs:res.data})
        });
    }
    
    viewDog(id){
    
        this.props.history.push(`/customerviewdog/${id}`)
        console.error("The routing is bad");
    }

    jsEmail(){
        this.props.push.push('/sendemail')
        console.log("error");
        console.error("The routing is bad");
    }

  render() {
    return (
                <div style={{backgroundColor:""}}>   
                 <div className = "card card-success" className ="container">
  
                    <div className="card-body" >
                        <div className="row">
                            { 
                               this.props.ListDog.map(
                                   dog =>
                                    <div className="col-md-12 col-lg-6 col-xl-4">
                                        <div className="card mb-2" style={{}}>

                                   <p key = {dog.id}>
                                       <img src = {dog.imageurl} style={{width:335, height:250}}/>  
                                        
                                       <h1 style={{fontSize:22, textAlign:"center", marginTop:20, color:'purple'}}>{dog.name}</h1> 
                                       <h3 style={{fontSize:15, textAlign:"center"}}>{dog.breed} / {dog.gender}</h3> 
                                       <h3 style={{fontSize:15, textAlign:"center"}}>My age is {dog.age} year(s) old</h3> 

                                       {/* <button type="button" style={{marginBottom:0}} onClick={()=>this.viewDog(dog.id)} className="btn btn-success">Message Me</button>*/}
                                        <a id = {dog.id}  href = {"/sendemail/"+dog.id} type="button" style={{marginTop:30, marginLeft:115}}  className="btn btn-success">Meet {dog.name}</a>
                                    
                                   </p>
                                   
                                        </div>
                                    </div>
                               )
                           
                           }

                        <h2 class="card-text" style={{marginTop:50}}>What's<span class = "filter-span" style={{marginLeft:10}}>Up?</span> </h2>  
                
                    <section class="about-section" id="about-section">

                        <div className="image-foodog">
                            <img src={`${process.env.PUBLIC_URL}/images/toypurchase.jpg`} />
                        </div>

                        <div className="content-about">
                            <h3 className='h3-foodog'>Cool Dogs <span className="dogfood-span">Deserves Cool</span> Toys</h3>
                            <p className="dog-food-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum sint, dolore perspiciatis iure consequuntur eligendi quaerat vitae shaikh anas.</p>
                            <a href="/toylist" class="btn-food-section">Visit Toy Store</a>
                        </div>
                    </section> 
               
  
                        </div>
                    </div>
                </div>
        
            </div>      
    )
  }
}
