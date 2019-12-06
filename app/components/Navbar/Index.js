import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class NavbarComponent extends Component {

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to={"/register"}>Cadastrar usuario</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={"/register-room"}>Cadastrar Sala</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={"/"}>Reservar</NavLink>
              </NavItem>
            </Nav>
            <NavLink to={"/login"}>Sair</NavLink>
          </Collapse>
        </Navbar>
      </div >
    );
  }
}
