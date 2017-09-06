import React from 'react'
import { Navbar, Nav, MenuItem, NavDropdown, NavItem  } from 'react-bootstrap'

class HeaderNav extends React.Component {
    render() {

        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">My app in React</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )

    }
}

export default HeaderNav