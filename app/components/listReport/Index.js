// @flow
import React, { Component, Fragment } from 'react';
import ReactTable from 'react-table'
import { indexReport } from '../../services/api'


const columns = [{
  Header: 'Nome',
  accessor: 'name',
  Cell: props => <span className='d-flex justify-content-center'>{props.value}</span>
}, {
  Header: 'tipo de Relatório',
  accessor: 'type_report',
  Cell: props => <span className='d-flex justify-content-center'>{props.value}</span>
}, {
  Header: 'Mensagem',
  accessor: 'text',
  Cell: props => <span className='d-flex justify-content-center '>{props.value}</span>
}
]
export default class ListReport extends Component {

  state = {
    data: []
  }
  componentDidUpdate() {
    console.log(this.state)
  }


  async componentDidMount() {
    try {
      const response = await indexReport();
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
