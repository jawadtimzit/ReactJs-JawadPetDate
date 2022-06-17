import React, { Component } from 'react';
import {SERVER_URL} from '../services/Customermanagemntservice.js';
import Customermanagemntservice from '../services/Customermanagemntservice';
import "../csscomponent/Customeralldoglist.css";


class Customeralldoglist extends Component {

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
            <div>
                <h1 class="h1">  is the list of the dogs</h1>
        
                <div className='container' >
                            
                            
                                        
                         {/*let's get each entity information from database to display it in our front end */}   
                         
                           { 
                           
                              this.state.dogs.map(
                                    dog =>
                                    
                                    <p key = {dog.id}>
                                        <div class="items-display">
                                            <div >
                                                <div> 
                                                <img src = {dog.imageurl} style={{width:350}}/>  
                                                <p>{dog.breed}</p> 
                                                <p>{dog.name}</p> 
                                                <p> Dog : Age {dog.age}</p>
                                                <p>{dog.gender}</p>
                                                <p>{dog.email}</p>
                                                <p>{dog.description}</p>
                                         
                                        <button onClick={()=>this.editDog(dog.id)} className="btn btn-success">Message Me</button>
                                                </div>       
                                            </div> 
                                        </div>
                                    </p>
                                )
                            
                            }
                        
                                  
                        
                         </div>      
            </div>
        );
    }
}

export default Customeralldoglist;