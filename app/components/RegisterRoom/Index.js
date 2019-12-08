// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RegisterRoom.css';
import * as Yup from "yup";
import { Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createRoom } from '../../services/api'
import { NotificationManager } from '../../components/ReactNotifications'
import Loading from '../../components/Loading'
const Schema = Yup.object().shape({
  title: Yup.string().required("Obrigatório"),
})
export default class RegisterRoom extends Component {
  state = { loading: false }
  render() {
    return (
      <Formik
        validationSchema={Schema}
        onSubmit={async (values) => {
          const { block, department, title } = values
          this.setState({ ...this.state, loading: true })
          try {
            const response = await createRoom({ block, department, title })
            this.setState({ ...this.state, loading: false })
            NotificationManager.success(
              '',
              'Sala Cadastrada com Sucesso!',
              3000,
              null,
              null
            )
          } catch (error) {
            console.log({ error: error })
            console.log({ error: error.response })
            NotificationManager.warning(
              '',
              'Erro ao cadastrar sala',
              3000,
              null,
              null
            )
            this.setState({ ...this.state, loading: false })
          }
          // this.props.history.push("/register")
        }}
        className="m-2"
        initialValues={{
          title: "",
          block: 1,
          department: ""
        }}>
        <Form>
          <Row className="m-5">
            <Col xs="12">
              <Label for="exampleName">Nome</Label>
              <Field
                name="title"
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    name="title"
                    placeholder="Identificação da Sala"
                  />
                )}
              />
              <ErrorMessage
                name="title"
                component="strong"
                className="text-danger mt-1"
              />
            </Col>
            <Col xs="12">
              <Label for="exampleName">Bloco</Label>
              <Field
                name="block"
                render={({ field }) => (
                  <Input
                    {...field}
                    type="select" name="block" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Input>
                )}
              />
            </Col>
            <Col xs="12">
              <Label for="exampleName">Departamento</Label>
              <Field
                name="department"
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    name="department"
                    placeholder="Departamento Responsável"
                  />
                )}
              />
            </Col>
            <Col xs="12">
              <Button className="my-4 mx-0" type="submit"  >
                criar
              </Button>
            </Col>
          </Row >
          <Loading loading={this.state.loading} />
        </Form>
      </Formik>


    );
  }
}
