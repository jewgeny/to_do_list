import React, {Component} from "react";
import axios from "axios";
import "../users.css";
import {connect} from "react-redux";

class Users extends Component {

    // state = {
    //     users: [],
    //     showUsers: false
    // }

    // componentDidMount(){
    // //    axios('https://jsonplaceholder.typicode.com/users')
    // //       .then(res => 
    // //             this.setState({users: res.data, showUsers: true})
    // //    );

    //   this.props.getUsers()
    //   console.log(this.props.userData)
   
    // }
     
    render(){

        console.log("users: ", this.props.userData)

        return(
           <div className="userWrapper">
            <h1>Users</h1>
            {this.props.showUsers &&
                <ul>
                    {this.props.userData.map((user, index) => {
                    return(
                        <div key={index} >
                        <li>Name: {user.name}</li>
                        <li>User Name: {user.username}</li>
                        </div>
                    ) 
                    })
                }
                </ul>
            }
           </div>
        )
    }
}

const mapPropsToState = state => {
    return{
        userData: state.users.allUsers,
        showUsers: state.users.showUsers
    }
}


export const UsersContainer = connect(mapPropsToState, null)(Users);