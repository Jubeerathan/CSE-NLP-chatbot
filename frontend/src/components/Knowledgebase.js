import React, { useEffect, useState, useRef } from "react";
import "quill/dist/quill.snow.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../knowledgebase.css";
import { Button } from "react-bootstrap";
import {
  getKnowledgebaseInfo,
  deleteKnowledgebaseInfo,
} from "../services/UpdateKnowledgebaseServices";

const Knowledgebase = () => {
  const fileInputRef = useRef(null);
  const [info, setInfo] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [content, setContent] = useState("");
  const [fileName, setFileName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (info.length && !isUpdated) {
      return;
    }
    getKnowledgebaseInfo().then((data) => {
      if (mounted) {
        setInfo(data);
      }
    });
    return () => {
      mounted = false;
      setIsUpdated(false);
    };
  }, [isUpdated, info]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setContent(event.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleCancel = () => {
    setContent(""); // Clear the content
    // Clear the file name
    setFileName("");

    setIsEditing(false); // Exit editing mode

    // Reset the file input value
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (window.confirm("Are you sure you want to save the changes?")) {
      const blob = new Blob([content], { type: "text/plain" });
      const formData = new FormData();
      formData.append("file", blob, fileName);

      // Replace 'your-server-endpoint' with the actual backend API endpoint
      fetch(`${process.env.REACT_APP_BACKEND}/savefile/`, {
        method: "POST", // You can use 'PUT' or 'PATCH' depending on your API
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            setIsSaved(true);
            alert("File saved successfully");
          } else {
            // Handle errors, display an error message, etc.
            console.error("Failed to save data to the server");
          }
        })
        .catch((error) => {
          console.error("Error while saving data:", error);
        });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      // Clear the content
      setContent("");

      // Clear the file name
      setFileName("");
      setIsEditing(false);
    }
  };

  const handleDelete = (e, update_id) => {
    e.preventDefault();
    deleteKnowledgebaseInfo(update_id).then((result) => {
      alert(result);
      setIsUpdated(true);
    });
  };

  return (
    <div className="body_div">
      <Col>
        {info.length !== 0 && (
          <Row>
            <div className="cards">
              <Row xs={1} sm={2} md={3} lg={4}>
                {info.map((information) => (
                  <Col key={information.update_id} xs={12} sm={6} md={4} lg={3}>
                    <Card
                      className="container-fluid bg-dark text-white mb-3"
                      border="primary"
                      style={{
                        width: "18rem",
                        height: "250px",
                        marginTop: "20px",
                        marginBottom: "10px",
                        marginLeft: "30px",
                        marginRight: "10px",
                      }}
                    >
                      <Card.Body className="card-body">
                        <Card.Text>{information.update_information}</Card.Text>
                        <div class="d-flex justify-content-between align-items-center">
                          <Button
                            variant="warning"
                            onClick={(event) =>
                              handleDelete(event, information.update_id)
                            }
                          >
                            Solve
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Row>
        )}
      </Col>
      <Col style={{ backgroundColor: "#252830" }}>
        <Container className=" container-fluid form_create">
          <Row className="mt-4">
            <Col>
              <Form.Group>
                <Form.Label className="label">Load File</Form.Label>
                <Form.Control
                  type="file"
                  accept=".txt"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />
              </Form.Group>
              {fileName && <p className="label">Loaded file: {fileName}</p>}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="editB"
                variant="primary"
                onClick={handleEdit}
                disabled={!fileName}
              >
                Edit
              </Button>
            </Col>
          </Row>
          {isEditing && (
            <Row className="mt-4">
              <Col>
                <Form.Group>
                  <Form.Label className="label">Edit File</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          )}
          {isEditing && (
            <Row>
              <Col>
                <Button
                  className="editB"
                  variant="success"
                  onClick={handleSave}
                >
                  Save
                </Button>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <Button
                  className="editB"
                  variant="danger"
                  onClick={() => {
                    handleCancel();
                  }}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          )}
        </Container>
      </Col>
    </div>
  );
};
export default Knowledgebase;
