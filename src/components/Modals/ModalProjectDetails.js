import React, { Component } from 'react'

class ModalProjectDetails extends Component {
  render() {
    return (
      <div
        id="myModal"
        className="modal"
        style={{ display: this.state.displayModal }}
        ref={this.modalRef}
      >
        <div className="modal-content">
          <div className="modal-header">
            <span
              className="close"
              onClick={() => this.setState({ displayModal: 'none' })}
            >
              &times;
            </span>
            <h2>Modal Header</h2>
          </div>
          <div className="modal-body">
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
          </div>
          <div className="modal-footer">
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalProjectDetails
