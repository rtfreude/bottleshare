import React, { Component } from 'react';
import { Button, Modal, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap'
import $                    from 'jquery';

import BeerPopOver from '../PopOver/BeerPopOver';
import './ModalBeer.css';

class ModalBeer extends Component {


  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );
    console.log(this.props)
    return (
      <div>

        <Modal show={this.props.showModal} onHide={this.props.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Beer Information Card</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <BeerPopOver
              beerName     = {this.props.beerName}
              displayName  = {this.props.displayName}
              beerDesc     = {this.props.beerDesc}
              beerTaste    = {this.props.beerTaste}
              beerImg      = {this.props.beerImg}
              beerStyle    = {this.props.beerStyle}
              beerAbv      = {this.props.beerAbv}
              srmMax       = {this.props.srmMax}
              gravity      = {this.props.gravity}
              ibu          = {this.props.ibu}
            />

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};



export default ModalBeer;
