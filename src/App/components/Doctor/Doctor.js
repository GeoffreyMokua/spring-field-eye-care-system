import React from "react";
import { Card, Col } from "react-bootstrap";

function Doctor({ doctor }) {
  const {
    img,
    first_name: firstName,
    last_name: lastName,
    experience,
    specialist,
  } = doctor;

  return (
    <div>
      <Col>
        <Card className="mx-5">
          <Card.Img variant="top img" src={img} />
          <Card.Body>
            <Card.Title className="fw-bold">
              Name: {firstName} {lastName}
            </Card.Title>
            <Card.Text>
              <h5 className="fw-bold">
                Practice Experience: {experience} Years
              </h5>
              <h5 className="fw-bold">
                Phd Holder with specialist on {specialist}{" "}
              </h5>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default Doctor;
