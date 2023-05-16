import React, { useEffect, useState } from "react";
import { Col, Row } from '@themesberg/react-bootstrap';

export default () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState("Loading Messages, Please Wait....");

  useEffect(() => {
    fetch("https://cms-server-29mo.onrender.com/contact")
      .then(response => response.json())
      .then(data => setMessages(data))
      .then(()=>setLoading(""))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        {loading}
        <b>MESSAGES</b>
      </div>

      <Row>
      <Col xs={12} xl={8}>
          {messages.map((message) => (
            <div key={message.id} className="border rounded p-4 mb-4">
              <h5 className="mb-4">Contact Information</h5>
              <p>
                <strong>Name:</strong> {message.firstName} {message.lastName}
              </p>
              <p>
                <strong>Email:</strong> {message.email}
              </p>
              <p>
                <strong>Phone:</strong> {message.phoneNumber}
              </p>

              <h5 className="mb-4">Subject</h5>
              <p>{message.subject}</p>
            </div>
          ))}
        </Col>
      </Row>
    </>
  );
};