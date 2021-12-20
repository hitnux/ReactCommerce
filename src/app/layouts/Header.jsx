import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const HeaderMenu = () => {
  const categories = useSelector((state) => state.categories.list)
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to="/" className="nav-link">ReactCommerce</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Store" id="basic-nav-dropdown">
              {categories.map((category, idx) => (
                <Link key={idx} to={category.slug} className="dropdown-item">{category.name}</Link>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#">Sign in</Nav.Link>
            <Nav.Link href="#">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderMenu;