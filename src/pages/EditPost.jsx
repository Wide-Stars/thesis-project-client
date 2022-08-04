import React from 'react';
import '../styles/edit-post.css';

const EditPost = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h1>Create post</h1>
          <form action="" method="POST">
            <div className="form-group has-error">
              <label htmlFor="slug">
                Slug <span className="require">*</span>{' '}
                <small>(This field use in url path.)</small>
              </label>
              <input type="text" className="form-control" name="slug" />
              <span className="help-block">Field not entered!</span>
            </div>
            <div className="form-group">
              <label htmlFor="title">
                Title <span className="require">*</span>
              </label>
              <input type="text" className="form-control" name="title" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                rows={5}
                className="form-control"
                name="description"
                defaultValue={''}
              />
            </div>
            <div className="form-group">
              <p>
                <span className="require">*</span> - required fields
              </p>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Create
              </button>
              <button className="btn btn-default">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
