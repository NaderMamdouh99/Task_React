import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesList = ({ person }) => {
    return (
        <Row className="justify-content-center">
            <Col sm="8" >
                <div className="rectangle p-2">
                    {person.length ? (person.map((item) => {
                        return (
                            <div key={item.id} className="d-flex border-bottom mx-3 my-2">
                                <img className="image-avatar" alt="phot" src={item.image} />
                                <div className="px-2">
                                    <p className="d-inline fs-">{item.name} </p>
                                    <p className="fs-6">{item.time}</p>
                                </div>
                            </div>
                        )
                    })) : <h2 className="p-5 text-center">لا يوجد مواعيد اليوم </h2>}
                </div>
            </Col>
        </Row>
    )
}

export default DatesList
