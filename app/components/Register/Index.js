// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { NotificationManager } from '../../components/ReactNotifications'
import Loading from '../../components/Loading'
import * as Yup from "yup";
import { createUser } from '../../services/api'


const Schema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("Obrigatório"),
  password: Yup.string().required("Obrigatório"),
  name: Yup.string().required("Obrigatório"),
  type: Yup.string().required("Obrigatório"),
})
export default class Register extends Component {
  state = {
    loading: false
  }
  render() {
    return (
      <Formik
        validationSchema={Schema}
        onSubmit={async (values) => {
          const { name, type, password, email } = values
          console.log(values)
          this.setState({ ...this.state, loading: true })
          try {
            const response = await createUser({ name, type, password, email })
            this.setState({ ...this.state, loading: false })
            NotificationManager.success(
              '',
              'Usuario Cadastrada com Sucesso!',
              3000,
              null,
              null
            )
          } catch (error) {
            console.log({ error: error })
            console.log({ error: error.response })
            NotificationManager.warning(
              '',
              'Erro ao cadastrar usuario',
              3000,
              null,
              null
            )
            this.setState({ ...this.state, loading: false })
          }
          // this.props.history.push("/register")
        }}
        initialValues={{
          name: "",
          email: "",
          password: "",
          type: "Administrador"
        }}>
        {({ setFieldValue }) => (
          <Form>
            <Row className="m-5">
              <Col xs="12" className="my-1">
                <Label for="exampleName">Nome</Label>
                <Field
                  name="name"
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      name="name"
                      placeholder="Nome de Usuário"
                    />
                  )}
                />
                <ErrorMessage
                  name="name"
                  component="strong"
                  className="text-danger mt-1"
                />
              </Col>
              <Col xs="12" className="my-1">
                <Label for="exampleName">Tipo de Usuario</Label>
                <Input
                  onChange={(e) => {
                    setFieldValue('type', e.target.value)

                  }}
                  type="select" name="type" >
                  <option value="Administrador">Administrador</option>
                  <option value="Servidor">Servidor</option>
                  <option value="Responsavel">Responsavel</option>
                </Input>
                <ErrorMessage
                  name="type"
                  component="strong"
                  className="text-danger mt-1"
                />
              </Col>
              <Col xs="12" className="my-1">
                <Label >Email</Label>
                <Field
                  name="email"
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      name="email"
                      placeholder="Email"
                    />
                  )}
                />
                <ErrorMessage
                  name="email"
                  component="strong"
                  className="text-danger mt-1"
                />
              </Col>
              <Col xs="12" className="my-1">
                <Label >Senha</Label>
                <Field
                  name="password"
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="password"
                      name="password"
                      placeholder="Senha"
                    />
                  )}
                />
                <ErrorMessage
                  name="password"
                  component="strong"
                  className="text-danger mt-1"
                />
              </Col>
              <Loading loading={this.state.loading} />
              <Col xs="12">

                <Button className="mx-0 my-4" type="submit">criar</Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    );
  }
}

