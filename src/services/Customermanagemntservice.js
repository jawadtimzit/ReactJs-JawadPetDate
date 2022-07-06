import React, { Component } from 'react'
import axios from 'axios';

{/* This is the url endpoint that gets the list of dogs*/}

export const SERVER_URL = 'http://localhost:8080/'

class Customermanagemntservice {

    // get dogs endpoints
    getDogs(){
        return axios.get(SERVER_URL+ 'api/customer/dogs');
    }
    // get dog by id
    getDogById(dogId){
        return axios.get(SERVER_URL +'api/customer/dogs/' +dogId)
    }

    // creating a method to get gender of dog 
    getDogGender(){
        return axios.get(SERVER_URL+'api/customer/getDogGender')
    }

    // creating a method to get dog breed and we call end endpoints from backend 
    getDogBreed(){
        return  axios.get(SERVER_URL+'api/customer/getDogBreed')
    }

    // get toys endpoints 
    getToys(){
        return axios .get(SERVER_URL+'api/customer/toys')
    }

    getToyById(toyId){
        return axios.get(SERVER_URL +'api/customer/toys/' +toyId)
    }
  
}
export default new Customermanagemntservice()


