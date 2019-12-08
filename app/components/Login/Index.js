// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NotificationManager } from '../../components/ReactNotifications'
import Loading from '../../components/Loading'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './Login.css';
import { Button, Row, Col, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Schema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("Obrigatório"),
  password: Yup.string().required("Obrigatório"),
})

import { auth } from '../../services/api'
export default class Login extends Component {
  state = { loading: false }

  // toggle = () => this.setState({ modal: !this.state.modal });
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
          <Formik
            onSubmit={async (values) => {
              const { email, password } = values
              this.setState({ ...this.state, loading: true })
              try {
                const response = await auth({ email, password })
                await localStorage.setItem("token", response.data.token);
                await localStorage.setItem("role", response.data.role);
                this.props.history.push('/app/report')
                this.setState({ ...this.state, loading: false })
                console.log(response)
              } catch (error) {
                console.log({ error })
                NotificationManager.warning(
                  '',
                  'Credenciais incorretas',
                  3000,
                  null,
                  null
                )
                this.setState({ ...this.state, loading: false })
              }
              // this.props.history.push("/register")
            }}
            initialValues={{
              email: "admin@admin.com",
              password: "123456"
            }}
            validationSchema={Schema}
          >

            <Form>
              <Row style={{ margin: 50 }}>
                <Col xs="12" className="mt-5">

                  <Label >Email</Label>
                  <Field
                    name="email"
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="email"
                        name="email"
                        placeholder="Insira seu email"
                      />
                    )}
                  />
                  <ErrorMessage
                    name="email"
                    component="strong"
                    className="text-danger mt-1"
                  />
                </Col>
                <Col xs="12" className="mt-2">

                  <Label >Senha</Label>
                  <Field
                    name="password"
                    type="password"
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="password"
                        name="password"
                        placeholder="Insira sua Senha"
                      />
                    )}
                  />
                  <ErrorMessage
                    name="password"
                    component="strong"
                    className="text-danger mt-1"
                  />
                </Col>
                <Col xs="12" className="d-flex justify-content-center">
                  <Button type="submit" >Entrar</Button>
                </Col>
              </Row>
            </Form>
          </Formik>
          <Loading loading={this.state.loading} />
        </div>
      </>
    );
  }
}
