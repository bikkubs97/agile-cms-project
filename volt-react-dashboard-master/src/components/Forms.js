import React, { useState } from 'react';
import { Col, Row, Card, Form, Button } from '@themesberg/react-bootstrap';

export const GeneralInfoForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    heading1: '',
    paragraph1: '',
    heading2: '',
    paragraph2: '',
    heading3: '',
    paragraph3: '',
    subheading1: '',
    subheading2: '',
    subheading3: '',
    paragraph4: '',
    paragraph5: '',
    paragraph6: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://cms-server-29mo.onrender.com/data', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        window.alert('Update Suceessful!');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Edit The Content</h5>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your title"
                  value={formData.title}
                  onChange={handleChange}
                  id="title"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="subtitle">
                <Form.Label>Subtitle</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your subtitle"
                  value={formData.subtitle}
                  onChange={handleChange}
                  id="subtitle"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Heading 1</Form.Label>
                <Form.Control
                  name="heading1"
                  required
                  type="text"
                  placeholder="Enter your hero heading"
                  value={formData.heading1}
                  onChange={handleChange}
                  id="heading1"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Paragraph 1</Form.Label>
                <Form.Control
                  name="paragraph1"
                  required
                  type="text"
                  placeholder="Enter your paragraph 1"
                  value={formData.paragraph1}
                  onChange={handleChange}
                  id="paragraph1"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Heading 2</Form.Label>
                <Form.Control
                  name="heading1"
                  required
                  type="text"
                  placeholder="Enter your heading 2"
                  value={formData.heading2}
                  onChange={handleChange}
                  id="heading2"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Paragraph 2</Form.Label>
                <Form.Control
                  name="paragraph2"
                  required
                  type="text"
                  placeholder="Enter your paragraph 2"
                  value={formData.paragraph2}
                  onChange={handleChange}
                  id="paragraph2"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Heading 3</Form.Label>
                <Form.Control
                  name="heading3"
                  required
                  type="text"
                  placeholder="Enter your  heading 3"
                  value={formData.heading3}
                  onChange={handleChange}
                  id="heading3"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Paragraph 3</Form.Label>
                <Form.Control
                  name="paragraph3"
                  required
                  type="text"
                  placeholder="Enter your paragraph 3"
                  value={formData.paragraph3}
                  onChange={handleChange}
                  id="paragraph3"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Sub heading 1</Form.Label>
                <Form.Control
                  name="subheading1"
                  required
                  type="text"
                  placeholder="Enter your sub heading 1"
                  value={formData.subheading1}
                  onChange={handleChange}
                  id="subheading1"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Paragraph 4</Form.Label>
                <Form.Control
                  name="paragraph4"
                  required
                  type="text"
                  placeholder="Enter your paragraph 4"
                  value={formData.paragraph4}
                  onChange={handleChange}
                  id="paragraph4"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Sub heading 2</Form.Label>
                <Form.Control
                  name="subheading2"
                  required
                  type="text"
                  placeholder="Enter your sub heading 2"
                  value={formData.subheading2}
                  onChange={handleChange}
                  id="subheading2"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Paragraph 5</Form.Label>
                <Form.Control
                  name="paragraph5"
                  required
                  type="text"
                  placeholder="Enter your paragraph 5"
                  value={formData.paragraph5}
                  onChange={handleChange}
                  id="paragraph5"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Sub heading 3</Form.Label>
                <Form.Control
                  name="subheading3"
                  required
                  type="text"
                  placeholder="Enter your sub heading 3"
                  value={formData.subheading3}
                  onChange={handleChange}
                  id="subheading3"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Paragraph 6</Form.Label>
                <Form.Control
                  name="paragraph6"
                  required
                  type="text"
                  placeholder="Enter your paragraph 6"
                  value={formData.paragraph6}
                  onChange={handleChange}
                  id="paragraph6"
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="mt-3">
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Update Content
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
