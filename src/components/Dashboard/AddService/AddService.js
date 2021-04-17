import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddService.css';

const AddService = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h2 className="text-center py-4 text-brand">Add service here</h2>
                    <form className="w-75 m-auto">
                        <div className="addService d-flex">
                            <div class="form-group me-5 w-75">
                                <label for="serviceTitle">Service Title</label>
                                <input type="text" class="form-control" id="serviceTitle" placeholder="Enter title"/>
                                
                                <label for="description">Description</label>
                                <textarea type="text" class="form-control" id="description" placeholder="Enter description"/>
                            </div>
                            <div class="form-group pt-4 mt-2">
                                <label className="uploadImage" for="image"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload</label>
                                <input type="file" id="image" hidden/>
                            </div>
                        </div>
                        <div className="submit-button text-right pt-4">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default AddService;