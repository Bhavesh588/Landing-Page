import React from 'react';

import './features.style.scss'

const Features = ({ imageurl, title, des }) => {
    return (
        <div>
            <div className="image-fe">
                <div className="image-circle">
                    <img src={imageurl} alt="Project" className="proimg-fe" />
                </div>
                <div className="hover-fe">
                    {title}
                </div>
                <div className="address">
                    {des}
                </div>
            </div>
        </div>
    );
}

export default Features;