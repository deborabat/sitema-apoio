// @flow
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table'
import { indexRoom } from '../../services/api'


const columns = [{
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
}
]
export default class ListRoom extends Component {

  state = {
    data: []
  }
  componentDidUpdate() {
    console.log(this.state)
  }


  async componentDidMount() {
    try {
      const response = await indexRoom();
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
          defaultPageSize={this.state.data.length === 0 ? 5 : this.state.data.length}

        />
      </Fragment>
    )
  }
}
