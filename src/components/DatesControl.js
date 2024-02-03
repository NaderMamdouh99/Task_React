import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesControl = ({ DeleteData, ShowDataPerson }) => {
    return (
        <Row className="justify-content-center my-3">
            <Col sm="8" className="d-flex justify-content-between">
                <button onClick={DeleteData} className="btn-style">مسح الكل</button>
                <button onClick={ShowDataPerson} className="btn-style">عرض البيانات</button>
            </Col>
        </Row>
    )
}

export default DatesControl
