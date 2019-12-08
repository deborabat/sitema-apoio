import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom'

export default class NavbarComponent extends Component {
  render() {
    console.log(localStorage.getItem("role"))
    return (
      <div>
        <Navbar expand="md">
          <Nav className="mr-auto" navbar>
            {localStorage.getItem("role") === "Administrador" && (
              <>
                <NavItem>
                  <NavLink >
                    <Link to={"/app/register"}>
                      Cadastrar Usuário
              </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink >
                    <Link to={"/app/register-room"}>
                      Cadastrar Sala
              </Link>
                  </NavLink>
                </NavItem>
              </>
            )}
            <NavItem>
              <NavLink >
                <Link to={"/app/reserve"}>
                  Reservar Sala
              </Link>
              </NavLink>
            </NavItem>
          </Nav>
          <Button color="link" className="text-white"
            onClick={async () => {
              await localStorage.clear()
              await this.props.history.push('/')
            }}>Sair</Button>
        </Navbar>
      </div >
    );
  }
}
