import React, { Component } from 'react'
import {SERVER_URL} from '../services/Customermanagemntservice.js';
import Customermanagemntservice from '../services/Customermanagemntservice';


export default class Customerlistalldogs extends Component {

    constructor(props){
        super(props)
        this.state = {
            // initialize an array of dogs
            // this array will be used to make a Rest Api call to our backend and store information we get in this array 
            dogs:[]
        };
    }

    componentDidMount(){ 
         Customermanagemntservice.getDogs().then((res) =>{
            this.setState({dogs:res.data})
        });
    }

  render() {
    return (
<div style={{backgroundColor:""}}>
      
        <h1> testing 
  <div className = "card card-success" className ="container">
                    <div className="card-body" >
                        <div className="row">
    { 
                               this.state.dogs.map(
                                   dog =>
                                    <div className="col-md-12 col-lg-6 col-xl-4">
                                    <div className="card mb-2" style={{}}>

                                   <p key = {dog.id}>
                                       <img src = {dog.imageurl} style={{width:335, height:250}}/>  
                                       <p style={{fontSize:12}}>{dog.breed}</p> 
                                       <p style={{fontSize:12}}>{dog.name}</p>  
                                       <p style={{fontSize:12}}> Dog : Age {dog.age}</p>
                                       <p style={{fontSize:12}}>{dog.gender}</p>
                                       <p style={{fontSize:12}}>{dog.email}</p>
                                       <p style={{fontSize:12}}>{dog.description}</p>
                                        
                                        <button style={{marginBottom:0}} onClick={()=>this.editDog(dog.id)} className="btn btn-success">Message Me</button>
                                           
                                   </p>
                                   </div>
                                   </div>
                               )
                           
                           }

                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  
  
  </div>
</div></div>
        </h1>
        </div>   
        
      
    )
  }
}
