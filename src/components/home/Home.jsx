import React, { useState } from "react";
import './style.css'
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [newCustomerName, setNewCustomerName] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [newCustomerAddress,setNewCustomerAddress] = useState("");
  const [businessName,setBusinessName] = useState("");
  const [businesstype, setBusinesstype] = useState("");
  const [businessYear,setBusinessYear] = useState("");
  const [dgForYourBusiness, setDgForYourBusiness] = useState("");
  const [dgUse, setDgUse] = useState("");

  const postDetail = () =>
    axios.post("https://videoaudit-server.onrender.com/api/marketing/add",{
        newCustomerName:newCustomerName,
        mobNo:mobNo,
        newCustomerAddress:newCustomerAddress,
        businessName:businessName,
        businesstype:businesstype,
        businessYear:businessYear,
        dgForYourBusiness:dgForYourBusiness,
        dgUse:dgUse
    }).then((response) => console.log(response)).catch((err) => console.log(err));

    const handleOldBusiness = (e) => {
        setBusinessYear(e.target.value)
    }

    const handleDgUse = (e) => {
        setDgUse(e.target.value)
    }

    const handleDgYourBusiness = (e) => {
        setDgForYourBusiness(e.target.value)
    }

  return (
    <Container>
      <Navbar className='navbar' />
      <div>
        <Card className="bg-white shadow-sm mb-4 mt-5" id="bg">
          <Card.Body>
            <Form>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group id="newCustomerName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={newCustomerName}
                      onChange={(e) => setNewCustomerName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="mobNo">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={mobNo}
                      onChange={(e) => setMobNo(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="mb-3">
                  <Form.Group id="newCustomerAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      rows="3"
                      value={newCustomerAddress}
                      onChange={(e) => setNewCustomerAddress(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group id="businessName">
                    <Form.Label>Business Name </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="businesstype">
                    <Form.Label>Business Type</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={businesstype}
                      onChange={(e) => setBusinesstype(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={6} className="mb-3">
                  <Form.Group id="businessYear">
                    <Form.Label>How old is the business</Form.Label>
                    <Form.Select
                      defaultValue="0"
                      value={businessYear}
                      onChange={handleOldBusiness}
                    >
                      <option>--Select Option --</option>
                      <option value="less 2 years">Less 2 years</option>
                      <option value="2 - 5 years">2 - 5 Years</option>
                      <option value="5 - 10 years">5 - 10 Years</option>
                      <option value="above 10years">Above 10Years</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="dgUse">
                    <Form.Label>
                      Has ever tried digital marketing before
                    </Form.Label>
                    <Form.Select
                      defaultValue="0"
                      value={dgUse}
                      onChange={handleDgUse}
                    >
                      <option>--Select Option --</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="mb-3">
                  <Form.Group id="dgForYourBusiness">
                    <Form.Label>
                      Why you want to do Digital Marketing for your business
                    </Form.Label>
                    <Form.Select
                      defaultValue="0"
                      value={dgForYourBusiness}
                      onChange={handleDgYourBusiness}
                    >
                      <option>--Select Option --</option>
                      <option value="business awareness">
                        Business Awareness
                      </option>
                      <option value="to get more walking">
                        To get more walking
                      </option>
                      <option value="to get sales">To get sales </option>
                      <option value="smm">social Media Maintenance(SMM)</option>
                      <option value="facebood-ad">Facebook Ad's</option>
                      <option value="google-ad">Google Ad's</option>
                      <option value="website-ad">Website Ad's </option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <div
                className="mt-3"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button variant="success" onClick={postDetail}>
                  <Link
                    to="/schedule"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Next
                  </Link>
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
      {/* Footer */}
    </Container>
  );
};

export default Home;
