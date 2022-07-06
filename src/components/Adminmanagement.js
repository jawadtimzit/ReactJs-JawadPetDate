import React, { Component } from 'react'
import Adminmanagementservice from '../services/Adminmanagementservice'
import {SERVER_URL} from '../services/Adminmanagementservice.js';
import "../csscomponent/Adminmanagement.css";
import axios from 'axios';


export default class adminmanagement extends Component {
  
    constructor(props){
        
        super(props)
        this.state = {
            // initialize an array of dogs
            // this array will be used to make a Rest Api call to our backend and store information we get in this array 
            dogs:[]
        };
        // bind the addDog method inside the constructor-event handling
        this.addDog = this.addDog.bind(this);
        // bind the editDog method inside the constructor-event handling
        this.editDog = this.editDog.bind(this);
        // bind the removeDog method inside the constructor-event handling
        this.removeDog = this.removeDog.bind(this);
        // bind the checkDog method inside the constructor-event handling
        this.checkDog = this.checkDog.bind(this);
    }
    

    editDog(id){
        const token = sessionStorage.getItem("jwt");
        const config ={
            headers: {
                Authorization: 'Bearer' + token
            }
        };
        // pass id to the path and route
        this.props.history.push(`/updatedog/${id}`, config);
    }

    // the new delete funtion 
    removeDog = (dogId)=>{

        const token = sessionStorage.getItem("jwt");
        const config ={
            headers: {
                Authorization: 'Bearer' + token
            }
        };

        axios.delete(SERVER_URL + 'api/admin/dogs/'+ dogId, config)
        .then(response =>{
            console.log(response);
            this.setState({dogs: this.state.dogs.filter(dog=>dog.id !==dogId)})  
            console.log(response); 
            alert("Are you sure you want to delete");
        },

        err => {
                 console.log(err)
             }
        
        );
    }
    
    checkDog(id){
        this.props.history.push(`/viewdog/${id}`)
    }

    // lets all the bade url using componentdimount
    componentDidMount(){ 
        this.fetchDogs();
    }

    fetchDogs = () => {
         // Read the token from the session storage
        // and include it to Authorization header
        const token = sessionStorage.getItem("jwt");
        const config ={
            headers: {
                Authorization: 'Bearer' + token
            }
        };
        axios.get(SERVER_URL + 'api/admin/dogs', config).then(
            res => {
                this.setState({dogs:res.data})
                console.log(res);
            },
            err => {
                console.log(err)
            }
        )
      }

    // lets create the method addDog here 
    addDog(){
        // whenever click addDog we navigate to create dog
        this.context.history.push('/addog');
    }
  
    render() {
    return (
        <div>
            <div>
          <h4 class="listdog-h4">Our Admin Dog List</h4>
            {/* create a button to add dogs*/}
            
                <div>
                    <a class ="addog-btn" className="btn btn-primary" href="/addog" role="button" onClick={this.addDog} >Add New Dog</a>
                
            </div>
          {/* create table with some css classes */}
            <div className='header-table'>
                <table>
                    {/*table header*/}
                    <thead>
                        {/*table row*/}
                        <tr>
                            {/*inside this lets make table headers*/}
                            <th> Dog breed</th>
                            <th> Dog name</th>
                            <th> Dog age</th>
                            <th> Dog gender</th>
                            <th> Dog email</th>
                            <th style={{width:25}}> Dog imageurl</th>
                            <th> Dog description</th> 
                            <th> Manage Dog</th>
                        </tr>
                    </thead>

                        {/*now lets create table body*/}
                        <tbody>
                         {/*let's get each entity information from database to display it in our front end */}   
                            {
                                this.state.dogs.map(
                                    dog =>
                                    <tr key = {dog.id}>
                                        <td>{dog.breed}</td>
                                        <td>{dog.name}</td>
                                        <td>{dog.age}</td>
                                        <td>{dog.gender}</td>
                                        <td style={{width:40}}>{dog.email}</td>
                                        <td>< img src = {dog.imageurl} style={{width:150}}/></td>  
                                        <td>{dog.description}</td>
                                        <td> 
                                            <button type="button" onClick={()=>this.editDog(dog.id)} className="btn btn-dark">Update</button>
                                            <button type="button" style={{margin:10}} onClick={()=>this.removeDog(dog.id)} className="btn btn-danger">Delete</button>
                                            {/*<button onClick={()=>this.checkDog(dog.id)} className="btn btn-success">View</button>*/}
                                        </td>

                                    </tr>
                                )

                            }
                       </tbody>  
                    
               </table>

            </div>
          </div>
        </div>
    )
  }
}
