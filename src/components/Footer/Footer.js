import React from 'react';
import { Col,  Row } from 'react-bootstrap';

const Footer = () => {
     return (
          <div className="bg-dark container-fluid">
          <Row>
          <Col>
          <img className="w-25 mt-5 mb-5" src="https://i.ibb.co/9wLHTRy/logo.png" alt="" />
          </Col>
          <Col xs={3} className="text-white mt-5">
          <p>About online foods</p>
          <p>Read our blog</p>
          <p>Sign up to deliver</p>
          <p>Add your restaurant</p>
          </Col>
          <Col className="text-white mt-5"md lg="3">
          <p>Get help</p>
          <p>Read FAQs</p>
          <p>View all cities</p>
          </Col>
        </Row>
        <div className='d-flex text-white justify-content-end mt-5 pb-5'>
        <p className='mx-4'>Privacy</p>
        <p className='mx-4'>Terms of use</p>
        <p className='mx-4'>Pricing</p>
        </div>
          </div>
     );
};

export default Footer;