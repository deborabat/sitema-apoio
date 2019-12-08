import React from 'react'
import ReactLoading from 'react-loading'
const Example = ({ loading, text } = this.props) =>
  loading ? (
    <div
      className="position-fixed w-100 h-100 flex-column"
      style={{
        top: 0,
        left: 0,
        zIndex: 5,
        backgroundColor: 'rgba(191, 185, 185, 0.3)'
      }}
    >
      <div className="d-flex justify-content-center align-items-center h-100 flex-column">
        <ReactLoading className="w-3 h-3"
          type={'spinningBubbles'}
          color={'black'}
        />
        <span className="text-dark h6 font-weight-bold">
          {text === undefined ? 'Carregando ...' : text}
        </span>
      </div>
    </div>
  ) : (
      <React.Fragment />
    )

export default Example
