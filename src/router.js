import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SidePanel from './components/sidePanel'
import Employees from './components/allemployees/index'
import AddEmployees from './components/addemployees/index'
import { Row, Col, Container } from "react-bootstrap"
import ActiveEmployee from './components/activeEmployee';
import PhonePanel from './components/phonepanel/phonePanel';
import logo from './images/Persona-Logo-01.png'

////////// INITIALIZES ALL ROUTES /////////////////
// PhonePanel component is hidden on desktop view with class phone-vew in ./styles/app.css
const router = () => {
    return (
        <Container fluid>
            <BrowserRouter>
                <Row>
                    <Col className='new-nav' md={2}>
                        <SidePanel />
                    </Col>
                    <Col className='d-flex phone-view'>
                        <div className='justify-content-center'>
                            <img alt='Inventive Group' src={logo} className='phone-img' />
                        </div>
                        <div>
                            <PhonePanel />
                        </div>
                    </Col>
                    <Col md={10}>
                        <Routes>
                            <Route path='/' element={<Employees />} />
                            <Route path='/employee/:id' element={<ActiveEmployee />} />
                            <Route path='/add-employee' element={<AddEmployees />} />
                        </Routes>
                    </Col>
                </Row>
            </BrowserRouter>
        </Container>
    )
}


export default router;