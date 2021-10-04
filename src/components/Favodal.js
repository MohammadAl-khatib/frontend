import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Favodal extends Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.item.favs.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input type="text" defaultValue={this.props.item.favs.strDrink} onChange={this.props.handleStrDrink}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{this.props.updateFav();this.props.handleClose()}}>
            Save Changes
          </Button>
          <Button variant="primary" onClick={this.props.deleteFav}>
            Delete Item
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Favodal;
