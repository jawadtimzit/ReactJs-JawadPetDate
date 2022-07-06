import React, { Component } from 'react'
import Customerlistalldogs from './Customerlistalldogs'
import axios from 'axios';
import Customermanagemntservice from '../services/Customermanagemntservice';
import "../csscomponent/Dogfiltering.css";

export default class Dogfiltering extends Component {

    constructor(props){
        super(props);
        this.state = {
          dogs:[],
          genders:[],
          breeds:[],
          selectedGender:'',
          selectedBreed:''
        }
    }

    // handle change for gender
    handleChangeGender=(e)=>{
      this.setState({selectedGender:e.target.value})
    }

    // handle change for breed
    handleChangeBreed=(e)=>{
      this.setState({selectedBreed:e.target.value})
    }

    handleFilter=()=>{
      //console.log(this.state.selectedGender);

      // filtering by passing parameters to endpoints with get.axios to get dogs 
      axios.get("http://localhost:8080/api/customer/getFilteredDogs?gender="+this.state.selectedGender+"&breed="+this.state.selectedBreed).then((res)=>{ 
      this.setState({dogs: res.data});
       });
    }

    componentDidMount()
  {
    Customermanagemntservice.getDogs().then((res)=>{  {/*call the method getDogs from Custumermanagentservice componenet*/}
            this.setState({dogs: res.data});
        });
    
     Customermanagemntservice.getDogGender().then((res)=>{  {/*call the method getDogGender from Custumermanagentservice  componenet*/}
    this.setState({genders: res.data});
     });

     Customermanagemntservice.getDogBreed().then((res)=>{  {/*call the method getDogBreed from Custumermanagentservice  componenet*/}
     this.setState({breeds: res.data});
      });

  }

  render() {
    return (
        <div style={{backgroundColor:''}}>           
        <section>
          <div>
            <div className="row">
              <div className="col-12">
                <div className="card card-dark">
                  <div className="card-header" style={{backgroundColor:''}}>
                  <img src={`${process.env.PUBLIC_URL}/images/groupdog.jpg`} style={{width:"100%"}}/>
                    <h2 className="text-filtering">Find your New Best Friend</h2>
                    <h4 className="text-filtering">Browse pets from our Network and find a Frined for your Dog</h4>
                    <br/>
                    
                  </div>
                <div className="card-body" style={{backgroundColor:'orange'}}>
              <div>
              <div className="btn-group w-100 mb-2" className="float-left" style={{marginBottom:'10px'}}>
                <a className="btn btn-success"  onClick={this.handleFilter} data-filter={1}> Display All Dogs </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            <div className="mb-2">
              <div className="float-left" >
                <select value={this.state.selectedGender} onChange={this.handleChangeGender}  className="custom-select" style={{width: '200px'} } >
                  <option> Select by Gender </option>
                  {this.state.genders.map(t=><option value={t}>{t}</option>)}
                </select>
                &nbsp;&nbsp;&nbsp;
                <select className="custom-select" style={{width: '200px'}} value={this.state.selectedBreed} onChange={this.handleChangeBreed}>
                  <option value="0"> Select by Breed </option>
                  {this.state.breeds.map(t=><option value={t}>{t} </option>)}
                </select>
                &nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
        <div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</section>
<Customerlistalldogs ListDog={this.state.dogs}></Customerlistalldogs>
</div>   
    )
  }
}
