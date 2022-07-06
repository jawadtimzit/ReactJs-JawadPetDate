import React, { Component } from 'react'
import Adminmanagementservice from '../services/Adminmanagementservice';
import Adminmanagement from '../components/Adminmanagement'
import {SERVER_URL} from '../services/Adminmanagementservice.js';
import  '../csscomponent/Adminmanagement.css'
import axios from 'axios';

const initialState = {
  emailError:"", 
}

export default class Admincreatedog extends Component {
  
    constructor(props){
        super(props)
        this.state={
        // lets create attributes for this state and initialize them to empty 
        // this will get us data from handler (input field) and will be availabe in form submission
        // this fields proprities will be used to store data that we get from input  
            breed:'',
            name:'',
            age:'',
            gender:'',
            email:'',
            imageurl:'',
            description:''
        }

        // lets bind even haldlers in a the constructor
        this.changeBreedHandler = this.changeBreedHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeImageUrlHandler = this.changeImageUrlHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);

        // lets also bind saveDog and cancel
        this.saveDog = this.saveDog.bind(this);
        
        
    }

    // saveDog method
    saveDog = (e) =>{
      e.preventDefault();
      const isValid = this.validate();
      if(!isValid){
      // lets get data here 
      let dog = {breed: this.state.breed, name: this.state.name, age:this.state.age, gender: this.state.gender,
                email: this.state.email, imageurl: this.state.imageurl, description: this.state.description};
      console.log('dog=>' +JSON.stringify(dog));
  
        const token = sessionStorage.getItem("jwt");
        const config ={
            headers: {
                Authorization: 'Bearer' + token
            }
        };

        axios.post(SERVER_URL + 'api/admin/dogs', dog, config).then(
            res => {
              alert("Dog was saved succefully");
              this.props.history.push('/listdogs');
                //this.setState({dogs:res.data})
                console.log(res);
            });
          }else{
            alert("Email should be in a valid format")
            this.setState(initialState);
          }
    }

    // lets route back to dog list when I click cancel
    cancel(){
      this.props.history.push('/listdogs');
    }

    // handlers
    changeBreedHandler=(event)=>{
      // lets capture event and assign value to breed we get in handler upon input  by using setState method
      this.setState({breed: event.target.value});
    }
    
    changeNameHandler=(event)=>{
      // lets capture event and assign value to name we get in handler upon input  by using setState method
      this.setState({name: event.target.value});
    }

    changeAgeHandler=(event)=>{
      // lets capture event and assign value to age we get in handler upon input  by using setState method
      this.setState({age: event.target.value});
    }
    
    changeGenderHandler=(event)=>{
      // lets capture event and assign value to gender we get in handler upon input  by using setState method
      this.setState({gender: event.target.value});
    }

    changeEmailHandler=(event)=>{
      // lets capture event and assign value to email we get in handler upon input  by using setState method
      this.setState({email: event.target.value});
    }

    changeImageUrlHandler=(event)=>{
      // lets capture event and assign value to imageurl we get in handler upon input  by using setState method
      this.setState({imageurl: event.target.value});
    }

    changeDescriptionHandler=(event)=>{
      // lets capture event and assign value to description we get in handler upon input  by using setState method
      this.setState({description: event.target.value});
    }
    
    // validation
    validate = () =>{
      let emailError="";
    if(!this.state.email.includes('@')){
        emailError = 'invalid email';   
    }
  };

  render() {
    return (
     
      <div className="content-wrapper">
          <div className = "container">
            <div className = "row" style={{marginTop:50, marginBottom:100}}>
              {/* lets create a card */}
              <div className ="card col-md-6 offset-md-3 offset-md-3">
                <h3 className ="h3-update"> Add New Dog</h3>
                {/* lets create a card body */}
                <div className = "card-body">
                  {/* lets create a form */}
                  <form>
                    
                    <div className = "form-group">
                      {/* lets create input fileds that we will use to inpu all data fields*/}
                     
                        <input placeholder="Breed" name="breed" className = "form-control"
                        value={this.state.breed} onChange={this.changeBreedHandler}/>
                        <br/> {/* work on this br and make it bootstrap*/}
                        <input placeholder="name" name="name" className = "form-control"
                        value={this.state.name} onChange={this.changeNameHandler}/>
                        <br/>
                        <input placeholder="age" name="age" className = "form-control"
                        value={this.state.age} onChange={this.changeAgeHandler}/>
                        <br/>
                        <input placeholder="gender" name="gender" className = "form-control"
                        value={this.state.gender} onChange={this.changeGenderHandler}/>
                        <br/>
                        
                        <input placeholder="email" name="email" className = "form-control"
                        value={this.state.email} onChange={this.changeEmailHandler}/>
                            {this.state.emailError}
                        <br/>
                        <input placeholder="imageurl" name="imageurl" className = "form-control"
                        value={this.state.imageurl} onChange={this.changeImageUrlHandler}/>
                        <br/>
                        <input placeholder="description" name="description" className = "form-control"
                        value={this.state.description} onChange={this.changeDescriptionHandler}/>
                    </div> <br></br>
                        <div>
                            <button className="btn btn-success" type="link" onClick={this.saveDog}> Save</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:10}}> Cancel</button>
                        </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
    </div>
   
    )
  }
}
