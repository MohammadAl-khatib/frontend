import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Favs extends Component {
  render() {
    return this.props.favs.map((item) => {
      return (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={`${item.favs.strDrinkThumb}`} />
            <Card.Body>
              <Card.Title>{item.favs.strDrink}</Card.Title>
              <Button variant="primary" onClick = {()=>this.props.handleOpen(item)}>Update</Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }
}

export default Favs;
