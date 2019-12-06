// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    // modal: 'false',
    // setModal: 'false'
  }

  // toggle = () => this.setState({ modal: !this.state.modal });

  handleEmail = (event) => {
    this.setState({
      ...this.state,
      email: event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      ...this.state,
      password: event.target.value
    })
  }
  render() {
    return (
      <>

        <div className="backButton" data-tid="backButton">
          <i
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.props.history.goBack()
            }}
            className="fa fa-arrow-left fa-3x mx-4 mt-2 pl-3" />
        </div>

        <div className="container">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleEmail}
                id="exampleEmail"
                placeholder="insira seu email"
              />
            </FormGroup>
            <Label for="exemplePassword">senha</Label>
            <Input
              type="password"
              value={this.state.password}
              onChange={this.handlePassword}
              placeholder="insira sua senha"
            />
          </Form>
          <Button onClick={
            () => {
              this.props.history.push("/register-room")
            }
          } >
            continuar
          </Button>
        </div>
        {/* <div>
          <Button onClick={toggle}>{buttonLabel}Criar conta</Button>
          <Modal isOpen={this.state.modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Atenção</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>OK</Button>
            </ModalFooter>
          </Modal>
        </div> */}
      </>
    );
  }
}
