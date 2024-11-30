import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { allStoryAPI } from '../services/allAPI';
import { SERVERURL } from '../services/baseUrl';
import '../App.css';

const TravelCard = () => {
    const [show, setShow] = useState(false);
    const [selectedStory, setSelectedStory] = useState(null);
    const [searchKey, setSearchKey] = useState('');
    const [allStory, setAllStory] = useState([]);

    // Fetch stories whenever the searchKey changes
    useEffect(() => {
        getAllStory();
    }, [searchKey]);

    const getAllStory = async () => {
        const token = sessionStorage.getItem('token');
        if (token) {
            const reqHeader = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            };
            try {
                const result = await allStoryAPI(searchKey, reqHeader);
                if (result.status === 200) {
                    setAllStory(result.data);
                } else {
                    console.error(result.response?.data || 'Failed to fetch stories');
                }
            } catch (err) {
                console.error('Error fetching stories:', err);
            }
        } else {
            console.error('No token found. Please login.');
        }
    };

    // Open modal and set the selected story
    const handleShow = (story) => {
        setSelectedStory(story);
        setShow(true);
    };

    // Close modal and reset selected story
    const handleClose = () => {
        setShow(false);
        setSelectedStory(null);
    };

    return (
        <div className="container">
            {/* Search Bar */}
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for stories..."
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                />
            </div>

            {/* Stories Grid */}
            <div className="row">
                {allStory.length ? (
                    allStory.map((story) => (
                        <div key={story._id} className="col-md-4 my-3">
                            <div className="card travel-card shadow-sm">
                                <img
                                    className="travel-card-img"
                                    src={`${SERVERURL}/uploads/${story?.imageUrl}`}
                                    alt={story.title || 'Story image'}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{story.title}</h5>
                                    <p className="text-muted small">
                                        <i className="fas fa-map-marker-alt"></i> {story.visitedLocation}
                                    </p>
                                    <div className="d-flex justify-content-evenly">
                                        <Button
                                            variant="outline-primary"
                                            size="sm"
                                            onClick={() => handleShow(story)}
                                        >
                                            Read More
                                        </Button>
                                        <i
                                            className="fas fa-edit text-primary mx-2"
                                            role="button"
                                            title="Edit Story"
                                        ></i>
                                        <i
                                            className="fas fa-trash-alt text-danger"
                                            role="button"
                                            title="Delete Story"
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p className="text-muted">No stories found.</p>
                    </div>
                )}
            </div>

            {/* Modal for displaying story details */}
            {selectedStory && (
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedStory.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            className="img-fluid mb-3"
                            src={`${SERVERURL}/uploads/${selectedStory?.imageUrl}`}
                            alt={selectedStory.title || 'Story image'}
                        />
                        <h6>
                            <i className="fas fa-map-marker-alt"></i> {selectedStory.visitedLocation}
                        </h6>
                        <p>{selectedStory.story}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default TravelCard;
