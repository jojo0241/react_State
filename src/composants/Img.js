import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function Img() {
    return (
      <Container>
        <Row>
          <Col xs={2} md={2}>
            <Image src="./images/cla1.jpg" height="300px" width="300px" />
          </Col>
        </Row>
      </Container>
    );
  }
  export default Img
  