// @flow
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import './Counter.css';
import ReactTable from 'react-table'
import { indexUser } from '../../services/api'


const columns = [{
  Header: 'Nome',
  accessor: 'username',
  Cell: props => <span className='d-flex justify-content-center'>{props.value}</span>
}, {
  Header: 'tipo de usuario',
  accessor: 'type_user',
  Cell: props => <span className='d-flex justify-content-center'>{props.value}</span>
}, {
  Header: 'Email',
  accessor: 'email',
  Cell: props => <span className='d-flex justify-content-center '>{props.value}</span>
}
]
export default class Counter extends Component {

  state = {
    data: []
  }
  componentDidUpdate() {
    console.log(this.state)
  }
  async componentDidMount() {
    try {
      const response = await indexUser();
      console.log({ response: response.data })
      this.setState({ ...this.state, data: response.data })

    } catch (error) {
      console.log({ error })
    }
  }
  render() {
    return (
      <Fragment>
        <ReactTable
          showPagination={false}
          data={this.state.data}
          columns={columns}
        />
      </Fragment>
    )
  }
}
