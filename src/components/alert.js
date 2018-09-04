import React, { Component } from 'react';

export default props => (
    <div style={{ display: 'flex' }} className="alert alert-warning" role="alert">
        <strong>{props.message}</strong>
    </div>
);
