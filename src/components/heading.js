import React from 'react';

export default function heading(props) {
    return (
        <div>
            <hr />
            <div className="text-primary">
                <h2>{props.text}</h2>
            </div>
            <hr />
        </div>
    );
}
