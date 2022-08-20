import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/singlePost.css';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import '../styles/singlePost.css';

const Post = () => {
  const isSupervisor = +localStorage.getItem('isSupervisor');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const path = useLocation().pathname.split('/')[2];
  const [postData, setPostData] = useState([]);
  const [postContent, setPostContent] = useState('');

  const getPostData = async () => {
    const token = localStorage.getItem('token');
    const data = await axios.get(
      `https://thesis-app-io.herokuapp.com/api/post/get/${path}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setPostData(data.data);
    setPostContent(parse(data.data.content));
    setLoading(false);
  };

  const handelApprove = async () => {
    const token = localStorage.getItem('token');
    const data = await axios.post(
      `https://thesis-app-io.herokuapp.com/api/post/approve/${path}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    postData.isApproved = true;
    navigate('/');
    location.reload();
  };
  const handelEdit = async () => {
    navigate(`/edit-post/${path}`);
  };
  const handelDelete = async () => {
    const token = localStorage.getItem('token');
    await axios.delete(
      `https://thesis-app-io.herokuapp.com/api/post/remove/${path}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    navigate('/');
  };

  useEffect(() => {
    getPostData();
  }, []);
  return (
    <>
      {' '}
      {loading && (
        <div className="text-center container d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!loading && (
        <div className="container pb50 mb-5">
          <div className="mt-3">
            <article>
              <img
                src="https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="coverImg mb-5 "
              />
              <hr />
              <div className="post-content">
                <h3 className="text-center ">
                  {postData.title}
                  {postData.type === 'project' ? (
                    <span className=" m-3 badge text-bg-success">Project</span>
                  ) : (
                    <span className=" m-3 badge text-bg-danger">Thesis</span>
                  )}
                </h3>

                <hr className="mb-40" />
                <div className="card">
                  <div className="card-body text-break ">{postContent}</div>
                </div>
                <div className="card mt-3">
                  {postData.postedBy?._id === localStorage.getItem('id') && (
                    <div className="card-body text-center">
                      <button
                        type="button"
                        onClick={handelDelete}
                        className="btn m-3 btn-outline-danger"
                      >
                        Delete
                      </button>

                      <button
                        type="button"
                        onClick={handelEdit}
                        className="btn m-3 btn-outline-warning"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
                <h3 className="text-center mt-3">Author details</h3>
                <div className="card mt-3">
                  <div className="card-body">
                    <div className="row text-left ">
                      <div className="col-sm-4 ">
                        <h6 className="ml-">Full Name</h6>
                      </div>
                      <div className="col-sm-7 text-secondary">
                        {postData.postedBy?.name}
                      </div>
                    </div>
                    <hr />
                    <div className="row text-left ">
                      <div className="col-sm-4">
                        <h6 className="ml-">Email</h6>
                      </div>
                      <div className="col-sm-7 text-secondary">
                        {postData.postedBy?.email}
                      </div>
                    </div>
                    <hr />

                    <div className="row text-left ">
                      <div className="col-sm-4">
                        <h6 className="ml-">Batch</h6>
                      </div>
                      <div className="col-sm-7 text-secondary">
                        {postData.postedBy?.batch}
                      </div>
                    </div>
                    <hr />
                    <div className="row text-left ">
                      <div className="col-sm-4">
                        <h6 className="ml-">Supervisor name</h6>
                      </div>
                      <div className="col-sm-7 text-secondary">
                        {postData?.supervisorName}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
