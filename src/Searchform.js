import React from "react";
import { Button, Form } from "react-bootstrap";
import './Searchform.css'
export default function Searchform(){
    return (
      <div>
        <form>
          <Form.Group
            className="searchbar mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="search" placeholder="Search here" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" className="Search">
            Search
          </Button>
          <Button variant="primary" type="submit" className="location">
            Location
          </Button>
        </form>
      </div>
    );
}