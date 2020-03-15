import React, {Component} from "react";
import {connect} from "react-redux";
import {addWish, changeValTxt, deleteWish, addToWishList} from "./store/actions/actions";
import { FaTrashAlt } from "react-icons/fa";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./cssTrasitions/createWish.css";


class CreateWishes extends Component {


    render(){

        console.log(this.props.wishes)
        return(
            <section id="addWishesWrapper" className="animated fadeIn">

                 <span>
                     <input type="text" value={this.props.txtValue} onChange={this.props.changeValTxt}  placeholder="Type your wish here" />
                     <button onClick={this.props.addWish} id="btnEnter">Enter</button>
                 </span>
       
                <ul id="ulWishes">
                    <TransitionGroup>
                    
                        {this.props.wishes.map((elem, index) => {
                          return ( 
                            <CSSTransition  
                              //in={false}
                             // appear={false}
                              key={index}
                              timeout={500} 
                              classNames="fade" 
                            >
                                <li>{elem.wishes} 
                                    <span>
                                        <input onChange={() => this.props.addToWishList(elem.wishes)} id="check" type="checkbox" />
                                        <FaTrashAlt onClick={() => this.props.deleteWish(elem.wishes)} id="trashIcon" />
                                    </span>
                                </li>
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

const mapStateToProps = (state) => {
     return{
         wishes: state.reducer.wishes,
         txtValue: state.reducer.txtValue
     }
}

const mapDispatchToProps = dispatch => {
     return{
         addWish: () => dispatch(addWish()),
         changeValTxt: (ev) => dispatch(changeValTxt(ev)),
         deleteWish: (ev) => dispatch(deleteWish(ev)),
         addToWishList: (ev) => dispatch(addToWishList(ev))
     }
}

export const  Wishes = connect(mapStateToProps, mapDispatchToProps)(CreateWishes);