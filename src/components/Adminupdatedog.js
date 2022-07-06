import React, { Component } from 'react'
import Adminmanagementservice from '../services/Adminmanagementservice';
import {SERVER_URL} from '../services/Adminmanagementservice.js';
import "../csscomponent/Adminupdatedog.css";
import axios from 'axios';



export default class Adminupdatedog extends Component {
    constructor(props){
        super(props)
        this.state={
          // to update dog we have to get id from the route 
          id:this.props.match.params.id,

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
        this.saveUpdatedDog = this.saveUpdatedDog.bind(this);
        this.cancel = this.cancel.bind(this);
        
        
    }

    // lets call method get id inside componentDidMount to get id first thing 
    componentDidMount(){ 
      const dogId = this.props.match.params.id;
          if (dogId) {
      this.findDogById(dogId);
      }
    }

    // find dog by id method 
    findDogById = (dogId) => {
      // get token from sessionStorage
      const token = sessionStorage.getItem("jwt");
      const config ={
        headers: {
            Authorization: 'Bearer' + token
        }
    };
    // get id by calling api endpoint of dog 
      axios.get(SERVER_URL +'api/admin/dogs/' +dogId , config)
      .then(response =>{
        if (response.data != null) {
          this.setState({
            id: response.data.id,
            breed: response.data.breed,
            name:response.data.name,
            age: response.data.age,
            gender: response.data.gender,
            email: response.data.email,
            imageurl: response.data.imageurl,
            description: response.data.description,
          });
        }
        // catch error 
      }).catch((error)=>{
        console.error("Error "+error);
      });
      
    }
    // after we get id of dog I will catch it and assign it to dog object with input data in form 
    saveUpdatedDog = (event)=>{
      event.preventDefault();
      let dog = {id: this.state.id, breed: this.state.breed, name: this.state.name, age:this.state.age, gender: this.state.gender,
                email: this.state.email, imageurl: this.state.imageurl, description: this.state.description};
                console.log('dog=>' +JSON.stringify(dog));
                // this dog object has data here that needs to be sent to backend through axios put

    const token = sessionStorage.getItem("jwt");
    const config ={
        headers: {
            Authorization: 'Bearer' + token
        }
    };
    // send data that we captured in dog object in form to backend we pass id and object with JWT token 
    axios.put(SERVER_URL + 'api/admin/dogs/'+this.state.id,dog,config).then(res =>{ 
                        console.log(res);
    // once dog updated we will route back to admin page
         this.props.history.push('/listdogs');
        console.log(res);
       },
         err=> {
           console.log(err);
         }
       );    
    
      }

    // lets route back to dog list when I click canel
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


  render() {
    return (
      <div className='content-wrapper'>
          <div className = "container">
            <div className = "row" style={{marginTop:50, marginBottom:100}}>
              {/* lets create a card */}
              <div className ="card col-md-6 offset-md-3 offset-md-3">
                <h3 className ="h3-update"> Update Dog</h3>
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
                        <br/>
                        <input placeholder="imageurl" name="imageurl" className = "form-control"
                        value={this.state.imageurl} onChange={this.changeImageUrlHandler}/>
                        <br/>
                        <input placeholder="description" name="description" className = "form-control"
                        value={this.state.description} onChange={this.changeDescriptionHandler}/>
                    </div> <br></br>
                        <div>
                            <button className="btn btn-success"  onClick={this.saveUpdatedDog}> Save</button>
                            <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft:10}}> Cancel</button>
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
