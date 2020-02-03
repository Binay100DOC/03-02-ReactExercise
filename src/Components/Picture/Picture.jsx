import React from 'react';
import './Picture.css';

function Picture(props) {
    return (
        <div className="picture-pug">
            <img src={props.src} />
        </div>
    );
}

export default Picture;