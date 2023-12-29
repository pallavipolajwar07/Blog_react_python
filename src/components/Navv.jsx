import {Navbar,NavbarBrand,NavbarToggler,NavbarText,Collapse,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownItem,DropdownMenu} from "reactstrap";

const Navv=()=>{
    return(
        <div>
        <Navbar color="dark" expand="md" fixed="">
        <NavbarBrand href="/">Blog Website</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">
                components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/google.com/">
                Link
              </NavLink>
            </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>Options</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>Option 3</DropdownItem>
              </DropdownMenu>
          </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple text</NavbarText>
        </Collapse>
        </Navbar>
    </div >
    )
}

export default Navv;