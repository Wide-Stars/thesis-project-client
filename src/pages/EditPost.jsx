import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/edit-post.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaPost } from '../components/Form';

const EditPost = () => {
  //   yep config
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaPost),
  });
  // end of yep config
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h1>Create post</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="title">
                Title <span className="require">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                {...register('title')}
              />
              <p className="wrn">{errors.title?.message}</p>
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                rows={6}
                className="form-control"
                name="content"
                defaultValue={''}
                {...register('content')}
              />
              <p className="wrn">{errors.content?.message}</p>
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
