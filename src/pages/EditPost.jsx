import '../styles/edit-post.css';
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaPost } from '../components/Form';

import axios from 'axios';

const EditPost = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaPost),
  });

  const onEditorStateChange = (editorState) => {
    setValue('content', editorState);
  };
  const [existingPost, setExistingPost] = useState();

  let editorContent = watch('content');

  const navigate = useNavigate();
  const postId = useLocation().pathname.split('/')[2];

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

      setExistingPost(post.data);
      onEditorStateChange(post.data.content);
    }
  };

  const onSubmit = async (data) => {
    console.log(data);

    if (postId) {
      await axios.post(
        `https://thesis-app-io.herokuapp.com/api/post/modify/${postId}`,
        {
          title: data.title,
          content: data.content,
          type: data.type,
          supervisorName: data.supervisorName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate('/');
      return;
    } else {
      const res = await axios.post(
        'https://thesis-app-io.herokuapp.com/api/post/create',
        {
          title: data.title,
          content: data.content,
          type: data.type,
          supervisorName: data.supervisorName,
        },
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group m-2">
              <label>Title</label>
              <input
                type="text"
                className="form-control "
                name="title"
                {...register('title')}
                defaultValue={existingPost ? existingPost.title : ''}
              />
            </div>
            <p className="wrn">{errors.title?.message}</p>

            <label>Post type</label>
            <div className="input-group mb-3">
              <select
                className="form-select"
                id="inputGroupSelect01"
                {...register('type')}
                defaultValue={existingPost ? existingPost.type : ''}
              >
                <option selected></option>
                <option value="project">Project</option>
                <option value="thesis">thesis</option>
              </select>
            </div>
            <p className="wrn">{errors.type?.message}</p>

            <div className="form-group m-2">
              <label>Supervisor Name</label>
              <input
                type="text"
                className="form-control "
                name="title"
                {...register('supervisorName')}
                defaultValue={existingPost ? existingPost.supervisorName : ''}
              />
            </div>
            <p className="wrn">{errors.supervisorName?.message}</p>

            <label htmlFor="content">Content</label>
            <ReactQuill
              theme="snow"
              className="h-5"
              value={editorContent}
              onChange={onEditorStateChange}
              style={{ height: '14rem' }}
            />
            <p className="wrn mt-5">{errors.content?.message}</p>

            <div className="form-group"></div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-primary bg-primary mt-5">
                {postId ? 'Update Post' : 'Submit Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
