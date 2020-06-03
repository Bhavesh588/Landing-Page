import React from 'react';

import './project.style.scss'

const Project = ({ imageurl, bedrooms, bathrooms, living, year, house }) => {
    return (
        <div>
            <div className="image-container">
                <div className="hover-inside">
                    <div className="hover-title">
                        <span className="features">Estate</span> FEATURES
                        <hr />
                    </div>
                    <div className="address">
                        Bedrooms: {bedrooms} <br/>
                        Bathrooms: {bathrooms}<br/>
                        Living Space: {living} ft<sup>2</sup><br/>
                        Year Built: {year}<br/>
                        House: {house}<br/>
                    </div>
                </div>
                <img src={imageurl} alt="Project" className="proimg" />
            </div>
        </div>
    );
}

export default Project;