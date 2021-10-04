import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { NavItem } from "react-bootstrap";

class DataCard extends Component {
  render() {
    return this.props.data.map((item) => {
      return (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src= {`${item.strDrinkThumb}`} />
            <Card.Body>
              <Card.Title>{item.strDrink}</Card.Title>
              <Button variant="primary" onClick = {()=>this.props.addToFavourites(item)}>Add to Favourits</Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }
}

export default DataCard;
