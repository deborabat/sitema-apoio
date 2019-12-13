// @flow
import React, { Component } from 'react';
import moment from 'moment';
import './Reserve.css';
import { Breadcrumb, Button, FormGroup, Label, Container, Row, Col, Card, CardBody, CardHeader, Input } from 'reactstrap';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { NotificationManager } from '../../components/ReactNotifications'
import Loading from '../../components/Loading'
import * as Yup from "yup";
import { createUser } from '../../services/api'
import PerfectScrollbar from 'react-perfect-scrollbar'
import "react-perfect-scrollbar/dist/css/styles.css";
import Calendar from 'react-calendar';

export default class Register extends Component {
  state = {
    date: new Date(),
  }
  onChange = date => {
    this.setState({ date })
  }
  render() {
    return (

      <Container>
        <h1 className="text-center">Selecione a data do agendamento</h1>
        <Row className="m-0">
          <Col xs="12" className="mt-5 justify-content-center d-flex">
            <Calendar
              minDate={new Date()}
              showNeighboringMonth
              onChange={this.onChange}
              value={this.state.date}
            />
          </Col>
          <Col xs="12" className="mt-5 justify-content-center d-flex">
            <Button onClick={() => {
              if (moment(this.state.date) < moment()) {
                NotificationManager.warning('',
                  'Data de agendamento deve ser maior que a data atual.',
                  3000,
                  null,
                  null)
              }
              else {
                this.props.history.push(`/app/reserve/${moment(this.state.date)}`)
              }
            }}>Continuar</Button>
          </Col>
        </Row>
      </Container>

    );
  }
}

