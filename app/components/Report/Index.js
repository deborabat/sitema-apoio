
import React, { Component } from 'react';
import './Report.css'
import { Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { NotificationManager } from '../../components/ReactNotifications'
import Loading from '../../components/Loading'
import * as Yup from "yup";
import { createReport } from '../../services/api'


const Schema = Yup.object().shape({
  name: Yup.string().required("Obrigatório"),
  type: Yup.string().required("Obrigatório"),
  text: Yup.string().required("Obrigatório"),

})
export default class Report extends Component {
  state = {
    loading: false
  }
  render() {
    return (
      <Formik
        validationSchema={Schema}
        onSubmit={async (values) => {
          const { name, type_report, text } = values
          console.log(values)
          this.setState({ ...this.state, loading: true })
          try {
            const response = await createReport({ name, type_report, text })
            this.setState({ ...this.state, loading: false })
            NotificationManager.success(
              '',
              'Relatório Cadastrado com Sucesso!',
              3000,
              null,
              null
            )
          } catch (error) {
            console.log({ error: error })
            console.log({ error: error.response })
            NotificationManager.warning(
              '',
              'Erro ao cadastrar relatório',
              3000,
              null,
              null
            )
            this.setState({ ...this.state, loading: false })
          }

        }}
        initialValues={{
          name: "",
          type: "Aviso",
          text: "",

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
                <Label for="exampleName">Tipo de Relatório</Label>
                <Input
                  onChange={(e) => {
                    setFieldValue('type', e.target.value)

                  }}
                  type="select" name="type_report" >
                  <option value="Aviso">Aviso</option>
                  <option value="informacao">Informação</option>
                  <option value="Ocorrencia">Ocorrencia</option>
                </Input>
                <ErrorMessage
                  name="type_report"
                  component="strong"
                  className="text-danger mt-1"
                />
              </Col>
              <Col xs="12" className="my-1">
                <Label >Mensagem</Label>
                <Field
                  name="text"
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      name="text"
                    />
                  )}
                />
                <ErrorMessage
                  name="text"
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
