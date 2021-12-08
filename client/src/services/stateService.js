import axios from 'axios' //

//need to export prosmise fetch method for other methods will use. 
export default {
    getAllStates() { //making a db request return promise.
        return axios.get('api/states').then( response => {
            return response.data  // list of our state objects
        })// list of our state objects is returned.
    }
}