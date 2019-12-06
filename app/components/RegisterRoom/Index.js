// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RegisterRoom.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class RegisterRoom extends Component {
  state = {
    name: '',
    block: '',
    departament: ''
  }
  handleName = (event) => {
    this.setState({
      ...this.state,
      name: event.target.value
    })
  }
  handleBlock = (event) => {
    this.setState({
      ...this.state,
      block: event.target.value
    })
  }
  handleDepartament = (event) => {
    this.setState({
      ...this.state,
      departament: event.target.value
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
              <Label for="exampleSelect">Bloco</Label>
              <Input type="select" name="Block" id="block">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleDepartamnet">Departamento</Label>
              <Input
                type="departament"
                name="departament"
                value={this.state.departament}
                onChange={this.handleDepartament}
                id="exampleDepartament"
                placeholder="Departamento responsável"
              />
            </FormGroup>
          </Form>
        </div>
        <Button className="my-2" onClick={
          () => {
            this.props.history.push("/login")
          }
        } >
          criar
          </Button>
        <Button className="my-2 " onClick={() => {
          this.props.history.goBack()
        }} >
          volatr
        </Button>
      </>
    );
  }
}
