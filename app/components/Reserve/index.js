// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Reserve.css';
import { Button, FormGroup, Label, Container, Row, Col, Card, CardBody, CardHeader, Input } from 'reactstrap';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { NotificationManager } from '../../components/ReactNotifications'
import Loading from '../../components/Loading'
import * as Yup from "yup";
import { createUser } from '../../services/api'
import PerfectScrollbar from 'react-perfect-scrollbar'
import "react-perfect-scrollbar/dist/css/styles.css";


const Schema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("Obrigatório"),
  password: Yup.string().required("Obrigatório"),
  name: Yup.string().required("Obrigatório"),
  type: Yup.string().required("Obrigatório"),
})
export default class Register extends Component {
  state = {
    loading: false,
    array1: [],
    array2: [],
    array3: [],
    date1: null,
    date2: null,
    date3: null
  }
  componentDidMount() {
    let array = []
    for (var i = 8; i <= 20; i++) {
      array.push({ name: "", number: i, disable1: false, disable2: false, room: "" });
    }
    const separator = "/"
    let newDate = new Date()
    let date1 = newDate.getDate();
    let date2 = newDate.getDate() + 1;
    let date3 = newDate.getDate() + 2;
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    this.setState({
      ...this.state,
      date1: `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date1}`,
      date2: `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date2}`,
      date3: `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date3}`,
      array1: array,
      array2: array,
      array3: array,
    })

  }
  render() {

    return (
      <div className="scroll">

        <PerfectScrollbar
        >

          <Row className="m-0">
            <Col xs="4">
              <Row>
                {this.state.array1.map((item, index) => (

                  <Col key={item.number} xs="12" className="mt-2">

                    <Card className="text-dark">
                      <CardHeader className="text-primary"><strong> {this.state.date1}</strong></CardHeader>
                      <CardBody className="">
                        <span> {item.number}h00</span>
                        <Input
                          disabled={item.disable1}
                          value={item.name}
                          onChange={(e) => {
                            const newArray = this.state.array1
                            let newArray2 = newArray
                            newArray2[index] = {
                              ...this.state.array1[index],
                              name: e.target.value,
                            }
                            this.setState({
                              ...this.state,
                              array1: [...newArray2]
                            })
                          }}
                          onBlur={() => {
                            if (this.state.array1[index].name !== "") {

                              const newArray = this.state.array1
                              let newArray2 = newArray
                              newArray2[index] = {
                                ...this.state.array1[index],
                                disable1: true
                              }
                              this.setState({
                                ...this.state,
                                array1: [...newArray2]
                              })
                            }
                          }
                          }
                          placeholder="Nome" />
                        <Input
                          disabled={item.disable2}
                          value={item.room}
                          onChange={(e) => {
                            const newArray = this.state.array1
                            let newArray2 = newArray
                            newArray2[index] = {
                              ...this.state.array1[index],
                              room: e.target.value,
                            }
                            this.setState({
                              ...this.state,
                              array1: [...newArray2]
                            })
                          }}
                          onBlur={() => {
                            if (this.state.array1[index].room !== "") {

                              const newArray = this.state.array1
                              let newArray2 = newArray
                              newArray2[index] = {
                                ...this.state.array1[index],
                                disable2: true
                              }
                              this.setState({
                                ...this.state,
                                array1: [...newArray2]
                              })
                            }
                          }
                          }
                          placeholder="Sala" />
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs="4">
              <Row>
                {this.state.array2.map((item, index) => (

                  <Col key={item.number} xs="12" className="mt-2">

                    <Card className="text-dark">
                      <CardHeader className="text-primary"><strong> {this.state.date2}</strong></CardHeader>
                      <CardBody className="">
                        <span> {item.number}h00</span>
                        <Input
                          disabled={item.disable1}
                          value={item.name}
                          onChange={(e) => {
                            const newArray = this.state.array2
                            let newArray2 = newArray
                            newArray2[index] = { name: e.target.value, number: this.state.array2[index].number, disable: this.state.array2[index].disable }
                            this.setState({
                              ...this.state,
                              array2: [...newArray2]
                            })
                          }}
                          onBlur={() => {
                            if (this.state.array2[index].name !== "") {
                              const newArray = this.state.array2
                              let newArray2 = newArray
                              newArray2[index] = { name: this.state.array2[index].name, number: this.state.array2[index].number, disable: true }
                              this.setState({
                                ...this.state,
                                array2: [...newArray2]
                              })
                            }
                          }}
                          placeholder="Nome" />
                        <Input
                          disabled={item.disable2}
                          value={item.room}
                          onChange={(e) => {
                            const newArray = this.state.array2
                            let newArray2 = newArray
                            newArray2[index] = {
                              ...this.state.array2[index],
                              room: e.target.value,
                            }
                            this.setState({
                              ...this.state,
                              array2: [...newArray2]
                            })
                          }}
                          onBlur={() => {
                            if (this.state.array2[index].room !== "") {

                              const newArray = this.state.array2
                              let newArray2 = newArray
                              newArray2[index] = {
                                ...this.state.array2[index],
                                disable2: true
                              }
                              this.setState({
                                ...this.state,
                                array2: [...newArray2]
                              })
                            }
                          }
                          }
                          placeholder="Sala" />
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs="4">
              <Row>
                {this.state.array3.map((item, index) => (

                  <Col key={item.number} xs="12" className="mt-2">

                    <Card className="text-dark">
                      <CardHeader className="text-primary"><strong> {this.state.date3}</strong></CardHeader>
                      <CardBody className="">
                        <span> {item.number}h00</span>
                        <Input
                          disabled={item.disable1}
                          value={item.name}
                          onChange={(e) => {
                            const newArray = this.state.array3
                            let newArray2 = newArray
                            newArray2[index] = { name: e.target.value, number: this.state.array3[index].number, disable: this.state.array3[index].disable }
                            this.setState({
                              ...this.state,
                              array3: [...newArray2]
                            })
                          }}
                          onBlur={() => {
                            if (this.state.array2[index].name !== "") {

                              const newArray = this.state.array3
                              let newArray2 = newArray
                              newArray2[index] = { name: this.state.array3[index].name, number: this.state.array3[index].number, disable: true }
                              this.setState({
                                ...this.state,
                                array3: [...newArray2]
                              })
                            }
                          }
                          }
                          placeholder="Nome" />
                        <Input
                          disabled={item.disable2}
                          value={item.room}
                          onChange={(e) => {
                            const newArray = this.state.array3
                            let newArray2 = newArray
                            newArray2[index] = {
                              ...this.state.array3[index],
                              room: e.target.value,
                            }
                            this.setState({
                              ...this.state,
                              array3: [...newArray2]
                            })
                          }}
                          onBlur={() => {
                            if (this.state.array3[index].room !== "") {

                              const newArray = this.state.array3
                              let newArray2 = newArray
                              newArray2[index] = {
                                ...this.state.array3[index],
                                disable2: true
                              }
                              this.setState({
                                ...this.state,
                                array3: [...newArray2]
                              })
                            }
                          }
                          }
                          placeholder="Sala" />
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </PerfectScrollbar>
      </div>

    );
  }
}

