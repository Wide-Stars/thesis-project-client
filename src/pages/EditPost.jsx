import '../styles/edit-post.css';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const EditPost = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const token = localStorage.getItem('token');

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (title.length < 10 || content.length < 10) {
      setErrorMessage(
        'Title must be at least 10 characters long and content must be at least 200 characters long'
      );
      return;
    } else {
      setErrorMessage('');
      const res = await axios.post(
        'http://localhost:3000/api/post/create',
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        navigate('/');
      }
    }

    // const res = await axios.post(
    //   'http://localhost:3000/api/post/create',
    //   {
    //     title: data.title,
    //     content: data.content,
    //   }
    // );
    // console.log(res);

    // navigate('/');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h1>Create post</h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                onChange={onTitleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <ReactQuill
                theme="snow"
                className="h-5"
                value={content}
                onChange={setContent}
              />
            </div>
            <div className="form-group"></div>
            <div className="form-group">
              <p className="wrn">{errorMessage}</p>
              <button type="submit" className="btn btn-primary bg-primary">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
