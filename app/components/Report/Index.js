import React from 'react';
import { Button, Table, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Report.css'

const Report = (props) => {
  return (

    <Row className="m-3  mt-5">
      <Col xs="12">
        <Table >
          <thead>
            <tr>
              <th>Data</th>
              <th>Atividade</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
          </tbody>
        </Table>
        <Button className="my-2" onClick={() => {
          props.history.goBack()
        }} >
          voltar
      </Button>
      </Col>
    </Row>
  );
}

export default Report;
