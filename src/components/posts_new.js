import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { savePost } from '../actions';
import Heading from './heading';


class PostNew extends Component {
    renderTextField(field) {
        const { touched, error } = field.meta;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <span className="label label-primary label-large">{field.title}</span>
                <input
                    className="form-control text-input"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">{touched && error}</div>
            </div>
        );
    }

    renderTextAreaField(field) {
        const { touched, error } = field.meta;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <span className="label label-primary label-large">{field.title}</span>
                <textarea
                    className="form-control text-input"
                    {...field.input}
                    rows="9"
                />
                <div className="text-help">{field.meta.touched && field.meta.error}</div>
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
                    <Field
                        name="title"
                        title="Title"
                        component={this.renderTextField}
                    />
                    <Field
                        name="categories"
                        title="Categories"
                        component={this.renderTextField}
                    />
                    <Field
                        name="content"
                        title="Post Content"
                        component={this.renderTextAreaField}
                    />
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/" className="btn btn-danger" style={{ marginLeft: '10px' }}>Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Title is required';
    }
    if (!values.categories) {
        errors.categories = 'Category is required';
    }
    if (!values.content) {
        errors.content = 'Post content is required';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewForm',
})(
    connect(null, { savePost })(PostNew)
);
