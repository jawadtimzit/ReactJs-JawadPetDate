import React, { Component } from 'react'
import Customermanagemntservice from '../services/Customermanagemntservice';
import Paypal from './Paypal';

export default class Routetopay extends Component {



  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,

      toys: {},

    }
  }


  componentDidMount() {
    Customermanagemntservice.getToyById(this.state.id).then(res => {
      this.setState({ toy: res.data });
      let toy = { price: this.state.price, toyname: this.state.toyname, imageurl: this.state.imageurl };
      console.log('dog=>' + JSON.stringify(toy));
    })
  }


  render() {
    return (
      <div>

        <Paypal></Paypal>
      </div>
    )
  }
}
