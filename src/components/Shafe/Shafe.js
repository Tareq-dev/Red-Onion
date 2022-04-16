import React from "react";
import { Col, Row } from "react-bootstrap";
import './Shafe.css'

const Shafe = () => {
  return (
    <div className="m-3">
      <h1 className="mt-3">Why you choose us</h1>
      <p className="w-50 fs-6 text-justify">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        fuga dolores, ad quibusdam beatae labore maxime, quasi deserunt
      </p>
      <Row>
        <Col className="shadow rounded-3 m-2 py-2">
          <img
            className="w-100"
            src="https://i.ibb.co/BzPYYZF/adult-blur-blurred-background-687824.png"
            alt=""
          />

          <div className="d-flex mt-3 px-3">
            <img
              className="h-25"
              src="https://i.ibb.co/prjH8CM/Group-204.png"
              alt=""
            />
            <div className="px-2 content-p">
              <h6>Fast Delivery</h6>
              <p className="fs-6">
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam perferendis consectetur facere amet vitae illo ex
                  enim consequatur provident nesciunt quod autem culpa pariatur.
                </small>
              </p>
              <a className="text-decoration-none" href="/ff">
                see more ..
              </a>
            </div>
          </div>
        </Col>
        <Col className="shadow rounded-3 m-2 py-2">
          <img
            className="w-100"
            src="https://i.ibb.co/D5KJn4b/chef-cook-food-33614.png"
            alt=""
          />

          <div className="d-flex mt-3 px-3">
            <img
              className="h-25"
              src="https://i.ibb.co/HFTNmgZ/Group-245.png"
              alt=""
            />
            <div className="px-2 content-p">
              <h6>Fast Delivery</h6>
              <p className="fs-6">
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam perferendis consectetur facere amet vitae illo ex
                  enim consequatur provident nesciunt quod autem culpa pariatur.
                </small>
              </p>
              <a className="text-decoration-none" href="/ff">
                see more ..
              </a>
            </div>
          </div>
        </Col>
        <Col className="shadow rounded-3 m-2 py-2">
          <img
            className="w-100"
            src="https://i.ibb.co/HCg0Dz5/architecture-building-city-2047397.png"
            alt=""
          />

          <div className="d-flex mt-3 px-3">
            <img
              className="h-25"
              src="https://i.ibb.co/N36mcVv/Group-1133.png"
              alt=""
            />
            <div className="px-2 content-p">
              <h6>Fast Delivery</h6>
              <p className="fs-6">
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam perferendis consectetur facere amet vitae illo ex
                  enim consequatur provident nesciunt quod autem culpa pariatur.
                </small>
              </p>
              <a className="text-decoration-none" href="/ff">
                see more ..
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Shafe;
