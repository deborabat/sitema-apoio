// @flow
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import './Counter.css';
import ReactTable from 'react-table'
import Loading from '../../components/Loading'
import moment from 'moment'
import { NotificationManager } from '../../components/ReactNotifications'

import { indexRoom, createRoomSchedule } from '../../services/api'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'reactstrap';

export default class Counter extends Component {
  columns = [{
    Header: 'Nome',
    accessor: 'title',
    Cell: props => <span className='d-flex justify-content-center'>{props.value}</span>
  }, {
    Header: 'Bloco',
    accessor: 'block',
    Cell: props => <span className='d-flex justify-content-center'>{props.value}</span>
  }, {
    Header: 'Departamento',
    accessor: 'department',
    Cell: props => <span className='d-flex justify-content-center '>{props.value}</span>
  },
  {
    Header: 'Status',
    accessor: 'schedule',
    Cell: props => {
      let status = "Disponivel"
      props.value && props.value.map(item => {
        status = item.date === this.props.match.params.date ? "Indisponivel" : "Disponivel"
      })
      console.log(status)
      return (<span className='d-flex justify-content-center '>{status}</span>)
    }
  },
  {
    Header: 'Ações',
    accessor: 'schedule',
    Cell: props => {
      let status = "Disponivel"
      props.value && props.value.map(item => {
        status = item.date === this.props.match.params.date ? "Indisponivel" : "Disponivel"
      })
      console.log({ props })
      return (status === "Disponivel" ? <Button onClick={() => this.setState({ ...this.state, current: props.original, modal: true })}>Agendar</Button> : "")
    }
  },
  ]

  columnsModal = [{
    Header: 'Usuario',
    accessor: 'user.username',
    Cell: props => <span className='d-flex justify-content-center'>{props.value}</span>
  }, {
    Header: 'Data',
    accessor: 'date',
    Cell: props => <span className='d-flex justify-content-center'>{props.value && moment(props.value).format("DD/MM/YYYY")} {props.value && moment(props.value).add(21, "hour").utcOffset(0).format("HH:mm")}</span>
  }
  ]

  state = {
    data: [],
    modal: true,
    current: undefined,
    time: "09:00",
    loading: false
  }

  getUsers = async () => {
    try {
      const response = await indexRoom();
      console.log({ response: response.data })
      this.setState({ ...this.state, data: response.data })

    } catch (error) {
      console.log({ error })
    }
  }
  handleModal = () => {
    this.setState({ ...this.state, modal: !this.state.modal })
  }
  handleOpenModal = ({ id }) => {
    this.setState({ ...this.state, modal: !this.state.modal })
  }
  async componentDidMount() {
    await this.setState({ ...this.state, loading: true })
    await this.getUsers()
    await this.setState({ ...this.state, loading: false })
  }
  render() {
    const { current } = this.state
    return (
      <Fragment>
        <Loading loading={this.state.loading} />

        <ReactTable
          showPagination={false}
          data={this.state.data}
          columns={this.columns}
          defaultPageSize={this.state.data.length === 0 ? 5 : this.state.data.length}

        />
        {current !== undefined && (
          <Modal size="lg" className="text-dark" isOpen={this.state.modal} >

            <ModalHeader toggle={this.handleModal}  >Sala {current.title}</ModalHeader>
            <ModalBody>
              <h5 className="text-dark mb-3">Novo Agendamento</h5>
              <Input type="select" defaultValue={this.state.time} value={this.state.time} onChange={(e) => this.setState({ ...this.state, time: e.target.value })} >
                <option value={"08:00"}>08:00</option>
                <option value={"09:00"}>09:00</option>
                <option value={"10:00"}>10:00</option>
                <option value={"11:00"}>11:00</option>
                <option value={"12:00"}>12:00</option>
                <option value={"13:00"}>13:00</option>
                <option value={"14:00"}>14:00</option>
                <option value={"15:00"}>15:00</option>
                <option value={"16:00"}>16:00</option>
                <option value={"17:00"}>17:00</option>
                <option value={"18:00"}>18:00</option>
              </Input>
              {current && current.schedule && current.schedule.length === 0 && "Nenhum Agendamento "}
              {current && current.schedule && current.schedule.length > 0 && (
                <>
                  <h5 className="text-dark mb-3 mt-3">Proximos Agendamentos</h5>
                  <ReactTable
                    showPagination={false}
                    data={current.schedule}
                    columns={this.columnsModal}
                    defaultPageSize={current.schedule.length === 0 ? 5 : current.schedule.length}

                  />
                </>
              )}
            </ModalBody>
            <ModalFooter>
              <Button onClick={async () => {
                const object = current.schedule
                let flag = false
                for (const key in object) {
                  if (object.hasOwnProperty(key)) {
                    const element = object[key];
                    if (moment(element.date).add(21, "hour").utcOffset(0).format("HH:mm").toString() === this.state.time) flag = true

                  }
                }
                if (flag) {
                  NotificationManager.warning('',
                    'Ja existe um agendamento nesse horario',
                    3000,
                    null,
                    null)
                }
                else {

                  this.setState({ ...this.state, loading: true })

                  try {
                    await createRoomSchedule({ room_id: this.state.current.id, date: `${moment(this.props.match.params.date).format("YYYY-MM-DD")} ${this.state.time}` })
                    this.setState({ ...this.state, modal: false, current: undefined })
                  } catch (error) {
                    console.log(error.response)
                  }
                  const response = await indexRoom();
                  console.log({ response: response.data })
                  this.setState({ ...this.state, data: response.data, loading: false, current: undefined })
                }
              }} color="success">Agendar</Button>
              <Button onClick={() => this.setState({ ...this.state, current: undefined })}>Cancelar</Button>
            </ModalFooter>
          </Modal>
        )}
      </Fragment>
    )
  }
}



