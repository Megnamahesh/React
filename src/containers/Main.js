import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Link } from "react-router-dom";

import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import HaaComponent from "./../components/HaaComponent";
import CaaComponent from "./../components/CaaComponent";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink} from 'mdbreact';
import data from "./../Images/Data.png";


class Main extends Component {
    render() {
      return (
          <div>
              <Navbar color="indigo" dark expand="md" Style="height:50px;"scrolling>
                 <NavbarNav center>
                 <img src={data}  width="150" height="50" ></img>
               
                 <NavItem >
                    <NavLink to="#">OVERVIEW</NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink to="#">HOW IT WORKS</NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink to="#">WHY FUND ADVANCE</NavLink>
                </NavItem>
                <button url="#" class="btn btn-primary">ENROLL</button>
             </NavbarNav>
         </Navbar>
         <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg" styles={{height:'200px',width:'100px'}} class="img-fluid z-depth-1" alt="1"></img>
         <div>
                 <HaaComponent></HaaComponent>
                 <CaaComponent></CaaComponent>
          </div> 
             
              
          </div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
