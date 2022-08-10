import '../styles/edit-post.css';
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useLocation } from 'react-router-dom';

import axios from 'axios';

const EditPost = () => {
  const navigate = useNavigate();
  const postId = useLocation().pathname.split('/')[2];

  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const token = localStorage.getItem('token');

  const getPost = async () => {
    if (postId) {
      const post = await axios.get(
        `https://thesis-app-io.herokuapp.com/api/post/get/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setContent(post.data.content);
      setTitle(post.data.title);
    }
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (postId) {
      await axios.post(
        `https://thesis-app-io.herokuapp.com/api/post/modify/${postId}`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate('/');
      return;
    }

    if (title.length < 10 || content.length < 200) {
      setErrorMessage(
        'Title must be at least 10 characters long and content must be at least 200 characters long'
      );
      return;
    } else {
      setErrorMessage('');
      const res = await axios.post(
        'https://thesis-app-io.herokuapp.com/api/post/create',
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
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="container  ">
      <div className="row w-20\\">
        <div className="col-md-12 col-md-offset-2 ">
          <h1 className="text-center mt-3 ">
            {postId ? 'Update Post' : 'Create Post'}
          </h1>
          <form onSubmit={onSubmit}>
            <div className="form-group m-2">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control "
                name="title"
                defaultValue={title}
                onChange={onTitleChange}
              />
            </div>

            <label htmlFor="content">Content</label>
            <ReactQuill
              theme="snow"
              className="h-5"
              value={content}
              onChange={setContent}
              style={{ height: '14rem' }}
            />

            <div className="form-group"></div>
            <div className="form-group text-center">
              <p className="wrn">{errorMessage}</p>
              <button type="submit" className="btn btn-primary bg-primary mt-5">
                {postId ? 'Update Thesis' : 'Submit Thesis'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
