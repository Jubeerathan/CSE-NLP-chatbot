import react from "react";
import { useState } from "react";
import { submit_feedback } from "../services/ChatServices";
import { Form, Button, Col, Row } from "react-bootstrap";
import "./UserFeedback.css";

function UserFeedback() {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(""); // To store the selected option

  const user_id = 1;

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the form submission here, e.g., send the feedback to an API or perform any desired action.
    console.log("Feedback:", feedback);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Rating:", rating);

    const postObject = {
      feedback_type: rating,
      feedback_details: feedback,
    };

    submit_feedback(user_id, postObject).then((data) => {
      console.log(data);

      // Clear the form fields
      setFeedback("");
      setName("");
      setEmail("");
      setRating("");
    });
  };

  //   Checked code for API call
  //   const postObject = {
  //     feedback_type: rating,
  //     feedback_details: feedback,
  //   };
  //   //   // working code fro sub,it_feedback
  //   submit_feedback(user_id, postObject).then((data) => console.log(data));

  return (
    <div className="mt-1 m-5">
      <h2>Feedback Form</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mt-2 mb-4">
          <Col>
            <Form.Group controlId="name">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="custom-input" // Apply custom CSS class
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="custom-input" // Apply custom CSS class
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="rating" className="mt-3 mb-4 custom-input">
          <Form.Label>Rating</Form.Label>
          <Form.Check
            type="radio"
            label="Accuracy"
            id="accuracy"
            name="rating"
            value="Accuracy"
            checked={rating === "Accuracy"}
            onChange={() => setRating("Accuracy")}
            className="mt-0"
          />
          <Form.Check
            type="radio"
            label="Performance"
            id="performance"
            name="rating"
            value="Performance"
            checked={rating === "Performance"}
            onChange={() => setRating("Performance")}
          />
        </Form.Group>

        <Form.Group controlId="feedback" className="mt-2 mb-4">
          <Form.Label>Briefly explain your Thoughts</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your comments here"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="custom-input" // Apply custom CSS class
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="m-1">
          Submit Feedback
        </Button>
      </Form>
    </div>
  );
}

export default UserFeedback;
