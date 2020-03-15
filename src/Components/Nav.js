import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import { FaTasks, FaUser } from "react-icons/fa";

class Nav extends Component {
     render(){
         return(
             <nav>
                  <NavLink id="logo" exact to="/"><p>Wishlist</p></NavLink>
                  <NavLink to="/users"><FaUser id="userIcon" /></NavLink>
                  <NavLink id="wishlistLogo" to="/results"><FaTasks id="taskIcon" /></NavLink>
             </nav>
         )
     }
}

export default Nav;