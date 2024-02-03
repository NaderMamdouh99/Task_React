import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatasCount = ({ person }) => {
    return (
        <Row className="justify-content-center my-2">
            <Col sm="8" >
                لديك اليوم {person.length} مواعيد
            </Col>
        </Row>
    )
}

export default DatasCount
