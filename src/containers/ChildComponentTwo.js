import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink} from 'mdbreact';

class ChildComponentTwo extends Component {
    render() {
      return (
        <Navbar color="indigo" dark expand="md" scrolling>
            <NavbarNav left>
                 <NavItem active>
                    <NavLink to="#">OVERVIEW</NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink to="#">HOW IT WORKS</NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink to="#">WHY FUND ADVANCE</NavLink>
                </NavItem>
            </NavbarNav>
        </Navbar>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChildComponentTwo);
