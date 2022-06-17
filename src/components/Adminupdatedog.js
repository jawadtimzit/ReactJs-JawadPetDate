import React, { Component } from 'react'
import Adminmanagementservice from '../services/Adminmanagementservice';
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

    componentDidMount(){

      const token = sessionStorage.getItem("jwt");
        const config ={
            headers: {
                Authorization: 'Bearer' + token
            }
        };
      Adminmanagementservice.getDogById(this.state.id, config).then( (res)=>{
        let dog = res.data;
        this.setState({breed: dog.breed, name: dog.name, age: dog.age, gender: dog.gender,
          email: dog.email, imageurl: dog.imageurl, description: dog.description
        });
  
      });
    }

    // updateDog method
    saveUpdatedDog = (e) =>{
      e.preventDefault();
      // lets get data here 
      let dog = {breed: this.state.breed, name: this.state.name, age:this.state.age, gender: this.state.gender,
                email: this.state.email, imageurl: this.state.imageurl, description: this.state.description};
      console.log('dog=>' +JSON.stringify(dog));
     
      // inside this updateDog method lets call updateDog so we can save the form input to databse 
      Adminmanagementservice.updateDog(dog, this.state.id).then(res =>{
        // once we dog updated we will route back to admin page
        this.props.history.push('/listdogs');
      });
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
      <div>
          <div className = "container">
            <div className = "row">
              {/* lets create a card */}
              <div className ="card col-md-6 offset-md-3 offset-md-3">
                <h3 className ="text-center"> Update Dog</h3>
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
