import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { savePost } from '../actions';
import Heading from './heading';

const FIELDS = {
    title: {
        label: 'Title',
        type: 'input',
    },
    categories: {
        label: 'Categories',
        type: 'input',
    },
    content: {
        label: 'Content',
        type: 'textarea',
    },
};

class PostNew extends Component {
    static renderField(field) {
        const { touched, error } = field.meta;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <span className="label label-primary label-large">{field.title}</span>
                <field.type
                    className="form-control text-input"
                    type="text"
                    {...field.input}
                    rows="9"
                />
                <div className="text-help">{touched && error}</div>
            </div>
        );
    }


    onSubmit(values) {
        this.props.savePost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <Heading text="Add Post"/>

                <form className="postForm" onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                    {_.map(FIELDS, (fieldConfig, field) => {
                        return <Field
                            key={field}
                            name={field}
                            title={fieldConfig.label}
                            type={fieldConfig.type}
                            component={PostNew.renderField}
                        />;
                    })}
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/" className="btn btn-danger" style={{ marginLeft: '10px' }}>Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    _.each(FIELDS, (value, key) => {
        if (!values[key]) {
            errors[key] = `${value.label} is required`;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewForm',
})(
    connect(null, { savePost })(PostNew)
);
