import Nav from 'react-bootstrap/Nav';
// import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import CreateStudent from './components/create-student.component'
//import CreateStudent2 from './components/create-student2.component'
import EditStudent from './components/edit-student.component'
import StudentList from './components/student-list.component'

function App() {
  return (
    <Router>
      <div className="App">
          
        <nav className="navbar navbar-dark bg-dark">
          <Container>

            <div className="navbar-brand">
              <Link to={"/create-student"} className="nav-link">
                React MERN Stack CRUD
              </Link>
            </div>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-student"} class="nav-link">
                  Create Student
                </Link>
              </Nav>
              <Nav>
                <Link to={"/student-list"} class="nav-link">
                  Student List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </nav>


        <Container>        
          <Row>
            <Col md="12">
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<CreateStudent/>} />
                  <Route path="/create-student" element={<CreateStudent/>} />
                  <Route path="/edit-student/:id" element={<EditStudent/>} />
                  <Route path="/student-list" element={<StudentList/>} />
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
