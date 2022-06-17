import React, { Component } from 'react'
import Adminmanagementservice from '../services/Adminmanagementservice'

export default class Adminviewdogdetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.params.id,
            dog: {}
        }
    }

componentDidMount(){
    Adminmanagementservice.getDogById(this.state.id).then(res=>{
        this.setState({dog: res.data})
    })
}


  render() {
    return (
      <div>
          <div className="card col-md-6 offset-md-3">
            <h3 className= "text-center">View Dog Detail</h3>
            <div className="card-body">
                <div className="row">
                    {/* <label>Breed: </label>
                    <div>{this.state.dog.breed}</div> */}

                </div>
            </div>
          </div>

      </div>
    )
  }
}
