import React, {Component} from 'react';
import Header from "./Components/Header";
import "./App.css";
import "./Components/cssTrasitions/routeTransition.css";
import {Wishes} from "./Components/CreateWishes";
import {ResultContainer} from "./Components/Results";
import {Route, Switch} from "react-router-dom";
import {UsersContainer} from "./Components/Users";
import {fetchPosts} from "./Components/store/actions/users";
import {connect} from "react-redux";



class App extends Component {

  componentDidMount(){
      this.props.getUsers()

    }

  render(){
    return (
      <div className="App">
         <Header />
            <Switch>
                  <Route exact path="/" component={Wishes}  />
                  <Route path="/users" component={UsersContainer} />
                  <Route path="/results" component={ResultContainer} />
            </Switch>
      </div>
  
    );
  }
  
}

const mapDispatchToState = dispatch => {
    return{
        getUsers: () => dispatch(fetchPosts())
    }
}

export const AppContainer = connect(null, mapDispatchToState)(App);
