import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import "../components/Navbar.css";

const Navbar = (args) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [modalR, setModalR] = useState(false);

  const toggleR = () => setModalR(!modalR);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-grey"
        style={{ backgroundColor: "rgba(233, 233, 233, 0.814)" }}
      >
        <div className="container-fluid"  style={{ padding:'0px 2px'}}>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: "black" }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/forbuyers" style={{ color: "black" }}>
                  Buyers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/forsellers" style={{ color: "black" }}>
                  Seller
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/forsellers" style={{ color: "black" }}>
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/forsellers" style={{ color: "black" }}>
                  Videos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/blogpage" style={{ color: "black" }}>
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signin" style={{ color: "black" }}>
                  Sign In
                </a>
              </li>
            </ul>
            <div className="side-nav">
              <div className="side-butt">
                <button className="btn butt" style={{backgroundColor:'#AC7E64',color:'white'}} type="submit" onClick={toggle}>
                  Support
                </button>

                {/* Modal for this support button starting*/}
                <Modal isOpen={modal} toggle={toggle} {...args}>
                  <ModalHeader toggle={toggle}>Linnseed Support</ModalHeader>
                  <ModalBody>
                    For enquiry, complaint, deactivate or disable account, remove or delete profile from mobile app and any other query submit your request or message. our team will contact you soon and process your request.
                    <FormGroup>
                      <br />
                      <Label for="exampleSelect">
                        Select
                      </Label>
                      <Input
                        id="exampleSelect"
                        name="select"
                        type="select"
                      >
                        <option> select</option>
                        <option> Request for account delete from mobile app</option>
                        <option> Temporarily deactivate or disable an account</option>
                        <option> Equiry about services</option>
                        <option> Complaint</option>
                        <option> other</option>

                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label for="name">
                        Enter Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="exampleNumber">
                        Enter Your Register Mobile Number
                      </Label>
                      <Input
                        id="exampleNumber"
                        name="number"
                        placeholder="Mobile"
                        type="number"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="exampleEmail">
                        Enter Your Email
                      </Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email(Optional)"
                        type="email"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="exampleText">
                        Message
                      </Label>
                      <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                        placeholder="Your Message"
                      />
                    </FormGroup>

                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onClick={toggle}>
                      Submit
                    </Button>

                  </ModalFooter>
                </Modal>
                {/* Modal for this support button ending*/}

                <button className="btn" type="submit">
                  Request Call
                </button>

                {/* Modal for this request call button starting*/}
                {/* <Modal isOpen={modal} toggle={toggle} {...args}>
                  <ModalHeader toggle={toggle}>Request Callback</ModalHeader>
                  <ModalBody>
                    <FormGroup>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Input
                        id="exampleNumber"
                        name="number"
                        placeholder="Mobile"
                        type="number"
                      />
                    </FormGroup>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onClick={toggle}>
                      Submit
                    </Button>
                  </ModalFooter>
                </Modal> */}
                {/* Modal for this request call button ending*/}

              </div>
              <div className="side-icons">
                <a
                  href="https://www.facebook.com/Linnseed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF
                    className="face"
                    style={{ marginRight: "35px", color: "#AC7E64"}}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/linnseed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn
                    className="linke"
                    style={{ marginRight: "35px", color: "#AC7E64" }}
                  />
                </a>
                <a
                  href="https://twitter.com/Linnseed__"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitter className="twit" style={{ marginRight: "35px", color: "#AC7E64" }} />
                </a>
                <a
                  href="https://www.instagram.com/_linnseed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    className="insta"
                    style={{ marginRight: "35px", color: "#AC7E64" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
