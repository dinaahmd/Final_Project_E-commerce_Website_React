import React from 'react';
import '../CSS/Contact_Us.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export function Contact_Us() {
    const formStyle = {
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '10px'
    };
  return (
      <div>
          <section id="contact" className="block contact-block">
              <Container fluid style={formStyle}>
                  <div className="title-holder">
                      <h2 className='text-center'>Contact us</h2>
                  </div>
                  <Form className='contact-form'>
                      <Row>
                          <Col sm={4}>
                              <Form.Control type="text" placeholder="Enter your full name" required />
                          </Col>
                          <Col sm={4}>
                              <Form.Control type="email" placeholder="Enter your email address" required />
                          </Col>
                          <Col sm={4}>
                              <Form.Control type="tel" placeholder="Enter your contact number" required />
                          </Col>
                      </Row>
                      <Row>
                          <Col className='my-3' sm={12}>
                              <Form.Control as="textarea" placeholder="Enter your contact message" required />
                          </Col>
                      </Row>
                      <div className='btn-holder'>
                          <Button variant='outline-primary' type="submit">Submit</Button>
                      </div>
                  </Form>
              </Container>
              {/* <div className='container-fluid'>
                  <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14048.211570060965!2d-0.1228208876550775!3d51.505942908931324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1481805868782"></iframe>
              </div>
              <Container>
                  <div className='contact-info mx-3'>
                      <ul>
                          <li>
                              <i class="bi bi-envelope"></i>
                              hello@domain.com
                          </li>
                          <li>
                              <i class="bi bi-telephone-fill"></i>
                              000-000-0000
                          </li>
                          <li>
                              <i class="bi bi-geo-alt-fill"></i>
                              Cairo, Egypt
                          </li>
                      </ul>
                  </div>
              </Container> */}
          </section>
    </div>
  )
}
