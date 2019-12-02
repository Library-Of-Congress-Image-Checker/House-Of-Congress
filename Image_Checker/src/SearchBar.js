import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Container, InputGroupAddon,InputGroup } from 'reactstrap';
import scrollToComponent from 'react-scroll-to-component';
import './body.css';

class SearchBar extends React.Component {
    state = { term: '' };
    onClick(event) {
  }

onFormSubmit= (event) => {
  event.preventDefault();
  console.log("I am Here to")
    //scrollToComponent(this.Indigo, { offset: 0, align: 'top', duration: 1500, ease:'inExpo'})
  this.props.onSubmit(this.state.term);
}

  render() {
    return (
      <>
       <Container fluid className="main-container">
          <Form onSubmit={this.onFormSubmit} className="flex-item ">

            <FormGroup>
                <h2 style={{textAlign: "center"}} className="heading">
                <Label for="Search">Unsplash Image Search</Label>
                </h2>
                <p className="para"> Image Search Engine made by photographers collection </p>

                <InputGroup>
                <Input type="text"
                  name="Search"
                  placeholder="type here....."
                  onChange={ (e) => { this.setState({term: e.target.value }) }}
                  onClick={this.onClick}
                  value= {this.state.term}
                  id="ted"
                />
              <InputGroupAddon addonType="append">

                <Button color="secondary">Search</Button>
                  </InputGroupAddon>
              </InputGroup>
            </FormGroup>
            </Form>


       </Container>

      </>
    )
  }
}

export default SearchBar;
