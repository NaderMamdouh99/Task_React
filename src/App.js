import { Col, Container, Row } from "react-bootstrap";
import { data } from './data';
import DatasCount from "./components/DatasCount";
import DatesList from "./components/DatesList";
import DatesControl from "./components/DatesControl";
import { useState, useEffect } from "react";
function App() {
  const [Datas, setDatas] = useState(data)


  const DeleteAll = () => {
    setDatas([]);
  }

  const ShowData = () => {
    setDatas(data);
  }

  useEffect(() => {
    setDatas([]);
  }, [])

  return (
    <div className="font color-body">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col sm="8" className="text-center">

          </Col>
        </Row>
        <DatasCount person={Datas} />
        <DatesList person={Datas} />
        <DatesControl DeleteData={DeleteAll} ShowDataPerson={ShowData} />
      </Container>
    </div>
  );
}

export default App;
