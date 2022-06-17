import React, { Component } from 'react'
import axios from 'axios';

{/* This is the url endpoint that gets the list of dogs*/}

export const SERVER_URL = 'http://localhost:8080/'

class Customermanagemntservice {

    getDogs(){
        return axios.get(SERVER_URL+ 'api/customer/dogs');
    }
  
}
export default new Customermanagemntservice()


