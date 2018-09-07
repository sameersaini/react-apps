import React from 'react';

export default function heading(props) {
    return (
        <div>
            <hr />
            <div className="text-primary">
                <h4>{props.text}</h4>
            </div>
            <hr />
        </div>
    );
}
