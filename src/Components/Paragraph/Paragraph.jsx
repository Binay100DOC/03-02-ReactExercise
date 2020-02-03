import React from 'react';
import Button from './Button/Button';
import './Paragraph.css';

function Paragraph(props) {
    return (
        <div className="paragraph">
           <p>{props.content1}</p>
           <p>{props.content2}</p>
           <Button buttonContent="Click it!" />
        </div>
    );
}

export default Paragraph;