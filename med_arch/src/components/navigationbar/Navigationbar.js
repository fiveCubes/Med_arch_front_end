import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,InputGroup,DropdownButton,Dropdown} from 'react-bootstrap'
import logo from './vase_logo.png'


class Navigationbar extends React.Component
{
  constructor()
    {
        super()
        this.state= {
          "filterName": "shape"
        }
    }

   ondropdownChange=(value)=>
   {
     this.setState({"filterName":value})
     this.props.onFilterChange(value)
   }
   
    render()
    {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><img src={logo} style={{"height":"75px"}}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
              <Form inline style={{"display":this.props.display_type}}>
              {/* <NavDropdown title="Filter" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <FormControl type="text" placeholder="Search"  onChange={this.searchChange} className="mr-sm-2" />
                <Button variant="outline-success">Search</Button> */}
               <InputGroup className="mb-3" style={{"visibility":this.props.filter_visibility}}>
                                <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title={this.state.filterName}
                                id="input-group-dropdown-1"
                                >
                                <Dropdown.Item onClick={()=>this.ondropdownChange("shape")}href="#">shape</Dropdown.Item>
                                <Dropdown.Item onClick={()=>this.ondropdownChange("location")}href="#">location</Dropdown.Item>
                                <Dropdown.Item onClick={()=>this.ondropdownChange("description")}href="#">description</Dropdown.Item>
                                </DropdownButton>
                                <FormControl aria-describedby="basic-addon1" onChange={this.props.onSearch}  />
                   </InputGroup>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          );
    }

}

export default Navigationbar;
