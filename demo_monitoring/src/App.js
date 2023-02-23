import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Cards from './components/Card.component';

function App() {
  return (
    <Router>
      <div className="App">

        <Container>        
          <Row>
            <Col >
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<Cards/>} />
                  <Route path="/demo" element={<Cards/>} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </Router>
  );
}

export default App;
