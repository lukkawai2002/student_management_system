import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Student Management System</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#this_semester_subjects">This Semester Subjects</Nav.Link>
                        <Nav.Link href="#add_assessments">Add Assessments</Nav.Link>
                        <Nav.Link href="#note_taking">Note Taking</Nav.Link>
                        <Nav.Link href="#past_academic_results">Past Academic Results</Nav.Link>
                        <Nav.Link href="#cgpa_calculation">CGPA Calculation</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar