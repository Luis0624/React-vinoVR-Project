import axios from "axios";
const BASEURL = "https://gr-wine-api.herokuapp.com/wines";
// const APIKEY = "";

export default {
    search: function(query) {
        return axios.get(BASEURL + query);
    },
    getLogin(id){
        return axios.get(`/api/users/${id}`)
    }, 
        
    //will get all users based on setup
    createUser(user){
        return axios.post("/api/users", user)
    }
};