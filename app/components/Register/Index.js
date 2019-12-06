// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Register extends Component {
  state = {
    name: '',
    typeUser: '',
    email: '',
    password: ''
  }
  handleName = (event) => {
    this.setState({
      ...this.state,
      name: event.target.value
    })
  }
  handleTypeUser = (event) => {
    this.setState({
      ...this.state,
      typeUser: event.target.value
    })
  }
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
        <div className="container">
          <Form>
            <FormGroup>
              <Label for="exampleName">Nome</Label>
              <Input
                type="name"
                name="name"
                value={this.state.name}
                onChange={this.handleName}
                id="exampleName"
                placeholder="Nome de usuario"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Tipo de usuario</Label>
              <Input type="select" name="TypeUser" id="TypeUser">
                <option>Gestor</option>
                <option>Professor</option>
                <option>Responsável</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleEmail}
                id="exampleEmail"
                placeholder="insira um email"
              />
            </FormGroup>
            <Label for="exemplePassword">senha</Label>
            <Input
              type="password"
              value={this.state.password}
              onChange={this.handlePassword}
              placeholder="insira uma senha"
            />
          </Form>
          <Button onClick={
            () => {
              this.props.history.push("/report")
            }
          } >

            criar
          </Button>
          <Button onClick={() => {
            this.props.history.goBack()
          }} >
            voltar
          </Button>
        </div>
      </>
    );
  }
}

