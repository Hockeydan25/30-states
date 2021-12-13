import axios from 'axios' //
//import { response } from 'express'//this thing keeps getting in the way!


//need to export prosmise fetch method for other methods will use. 
export default {
    getAllStates() { //making a db request return promise.
        return axios.get('api/states').then( response => {
            return response.data  // list of our state objects
        })// list of our state objects is returned.
    },
    setVisited(stateName, visited){
        //example URL api/state/"stateName here"
        let requestData = {visited: visited }
        return axios.patch('/api/states/' + stateName, requestData ).then( response =>{ //request to api.
            return response.data //should be sucess
        })    
    },
    getOneState(stateName) {
        return axios.get('/api/state/' + stateName).then( response => {
            return response.data
        }) 
    }

        
}