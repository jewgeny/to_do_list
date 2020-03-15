import axios from "axios";

export const showText = () => {
    return{
        type: "SHOWTEXT"
    }
}

const recievePosts = (data) => {
    return{
        type: "RECIEVEPOSTS",
        payload: data
    }
}

export const fetchPosts = () => {
    return dispatch => {
       axios('https://jsonplaceholder.typicode.com/users')
          .then(res => dispatch(recievePosts(res.data)
          
          ))
          .catch(error => console.log(error))
         
    }
}