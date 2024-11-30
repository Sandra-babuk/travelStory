import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { addSatoryAPI } from '../services/allAPI';

const Add = () => {
    const [show, setShow] = useState(false); // Modal visibility state
    const [travelStoryData, setTravelStoryData] = useState({
        title: '',
        story: '',
        visitedLocation: '',
        imageUrl: '', // This will hold the image URL or file
    });
    const [imagePreview, setImagePreview] = useState(null); // URL for previewing the image

    // Show modal
    const handleShow = () => setShow(true);

    // Close modal and reset form
    const handleClose = () => {
        setShow(false);
        setTravelStoryData({
            title: '',
            story: '',
            visitedLocation: '',
            imageUrl: '', // Reset the image URL or file
        });
        setImagePreview(null); // Reset preview
    };

    // Update image preview when imageUrl changes
    useEffect(() => {
        if (travelStoryData.imageUrl && travelStoryData.imageUrl.type) {
            // If a file is selected, create a preview URL
            const previewUrl = URL.createObjectURL(travelStoryData.imageUrl);
            setImagePreview(previewUrl);
            return () => URL.revokeObjectURL(previewUrl); // Cleanup preview URL
        } else if (travelStoryData.imageUrl && !travelStoryData.imageUrl.type) {
            // If a URL is provided, use it as the preview
            setImagePreview(travelStoryData.imageUrl);
        }
    }, [travelStoryData.imageUrl]);

    // Handle form submission
    const handleAddStory = async () => {
        const { title, story, visitedLocation, imageUrl } = travelStoryData;

        if (title && story && visitedLocation && imageUrl) {
            // If the imageUrl is a file, prepare it for FormData, otherwise, use it directly as URL
            const reqBody = new FormData();
            reqBody.append('title', title);
            reqBody.append('story', story);
            reqBody.append('visitedLocation', visitedLocation);

            if (imageUrl && imageUrl.type) {
                // If it's a file, append it as FormData
                reqBody.append('imageUrl', imageUrl);
            } else {
                // If it's a URL, append the URL as a string
                reqBody.append('imageUrl', imageUrl);
            }

            const token = sessionStorage.getItem('token'); // Assume token exists
            const reqHeader = {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            };

            try {
                const result = await addSatoryAPI(reqBody, reqHeader);
                if (result.status === 200) {
                    handleClose(); // Close modal on success
                    alert('Story added successfully!');
                } else {
                    alert(result.response.data.message || 'Error adding story');
                }
            } catch (err) {
                console.error('Error adding story:', err);
                alert('Error adding story. Please try again.');
            }
        } else {
            alert('Please fill in all fields and upload an image!');
        }
    };

    return (
        <div>
            <div className="home-container">
                <div className="center-button">
                    <Button variant="success" onClick={handleShow}>
                        Add Your Own Story
                    </Button>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Your Travel Story</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            {/* Title */}
                            <Form.Group controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    value={travelStoryData.title}
                                    onChange={(e) =>
                                        setTravelStoryData({ ...travelStoryData, title: e.target.value })
                                    }
                                    type="text"
                                    placeholder="Enter story title"
                                />
                            </Form.Group>

                            {/* Story */}
                            <Form.Group controlId="formStory" className="mt-3">
                                <Form.Label>Story</Form.Label>
                                <Form.Control
                                    value={travelStoryData.story}
                                    onChange={(e) =>
                                        setTravelStoryData({ ...travelStoryData, story: e.target.value })
                                    }
                                    as="textarea"
                                    rows={3}
                                    placeholder="Write your story here"
                                />
                            </Form.Group>

                            {/* Visited Location */}
                            <Form.Group controlId="formLocation" className="mt-3">
                                <Form.Label>Visited Location</Form.Label>
                                <Form.Control
                                    value={travelStoryData.visitedLocation}
                                    onChange={(e) =>
                                        setTravelStoryData({ ...travelStoryData, visitedLocation: e.target.value })
                                    }
                                    type="text"
                                    placeholder="Enter location"
                                />
                            </Form.Group>

                            {/* Image Upload or URL */}
                            <Form.Group controlId="formImage" className="mt-3">
                                <Form.Label>Upload Image or Provide Image URL</Form.Label>

                                {/* File Upload */}
                                <Form.Control
                                    onChange={(e) =>
                                        setTravelStoryData({ ...travelStoryData, imageUrl: e.target.files[0] })
                                    }
                                    type="file"
                                />
                                {/* Image Preview */}
                                {imagePreview && (
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="img-fluid mt-3"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                    />
                                )}
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleAddStory}>
                            Save Story
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Add;
