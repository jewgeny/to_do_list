import React, {Component} from "react";
import {connect} from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import {deleteWishListItem} from "./store/actions/actions";
import {CSSTransition, TransitionGroup} from "react-transition-group";

class Results extends Component {
    render(){
        return(
            <section id="addWishesWrapper"  className="animated fadeIn">
                <h1>Your favourite wishes</h1>
                 <ul id="ulWishes">
                    <TransitionGroup>
                    {
                      this.props.wishlist.map((elem, index) => {
                          return(
                            <CSSTransition
                            key={index}
                            timeout={500}
                            classNames="fade"
                            >
                              <li>{elem.wishes} <FaTrashAlt  onClick={() => this.props.deleteWishListItem(elem.wishes)} id="trashIcon" /></li>
                            </CSSTransition>
                          )
                      })
                    }
                    </TransitionGroup>
                 </ul>
            </section>
        )
    }
}

const mapStateToProps = state => {
     return{
        wishlist: state.reducer.wishlist
     }
}

const mapDispatchToProps = dispatch => {
    return{
        deleteWishListItem: (ev) => dispatch(deleteWishListItem(ev))
    }
}

export const ResultContainer = connect(mapStateToProps, mapDispatchToProps)(Results);