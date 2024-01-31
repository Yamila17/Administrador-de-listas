
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormHome from './form/FormHome'
import TableHome from './table/TableHome'
import '../home/home.css'
import Footer from './footer/Footer'

function Home() {
    return (
      <div className='contentHome'>
        <Container>
          <Row >
            <Col className='d-flex justify-content-center mt-5'>
              <img className="logoPrincipal" 
                  src="/src/images/logo.png" />
              </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12}>
              <FormHome />
            </Col>
          </Row>
          <TableHome />
          <Footer />
        </Container>
      </div>
    );
  }
export default Home