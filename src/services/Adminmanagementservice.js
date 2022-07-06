import axios from 'axios';


{/* This is the url endpoint that gets the list of dogs*/}

export const SERVER_URL = 'http://localhost:8080/'

class Adminmanagementservice{  
   // lets create a method to return list of dogs 
    getDogs(){
        return axios.get(SERVER_URL+ 'api/admin/dogs');
    }
    // lets create a method to post the employee object with data in databse - send it to Rest Api
    createDog(dog){
        return axios.post( SERVER_URL + 'api/admin/dogs', dog); // pass object
    }
    // get dog by id
    getDogById(dogId){
        return axios.get(SERVER_URL +'api/admin/dogs/' +dogId)
    }
    //update
    updateDog(dog, dogId){
         
        return axios.put(SERVER_URL + 'api/admin/dogs/' + dogId, dog);
    }

    // delete dog 
    deleteDog(dogId){      
        return axios.delete(SERVER_URL + 'api/admin/dogs/' + dogId);
    }
}

export default new Adminmanagementservice()