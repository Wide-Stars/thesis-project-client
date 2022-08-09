import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/singlePost.css';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import '../styles/singlePost.css';

const Post = () => {
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
    console.log(postData);
  }, []);
  return (
    <>
      <div className="container pb50 ">
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
                {postData.isApproved ? (
                  <span class=" m-3 badge text-bg-success">Approved</span>
                ) : (
                  <span class=" m-3 badge text-bg-warning">Pending</span>
                )}
              </h3>

              <hr className="mb-40" />
              <div className="card">
                <div className="card-body imgP">{postContent}</div>
              </div>
              <div className="card">
                <div className="card-body text-center">
                  {!postData.isApproved && (
                    <button
                      type="button"
                      onClick={handelApprove}
                      class={`btn m-3 btn-outline-success  `}
                    >
                      Approve
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handelDelete}
                    class="btn m-3 btn-outline-danger"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={handelEdit}
                    class="btn m-3 btn-outline-warning"
                  >
                    Edit
                  </button>
                </div>
              </div>
              <hr className="mb40" />
              <h3 className="mb40 text-center text-uppercase font500">
                About Author
              </h3>
              <hr className="mb40" />

              <div className="media mb40">
                <i className="d-flex mr-3 fa fa-user-circle fa-5x text-primary" />
                <div className="media-body">
                  <h4 className="mt-0 font700">{postData.postedBy?.name}</h4>{' '}
                  {postData.postedBy?.name} is a USA Today bestselling author of
                  swashbuckling action-adventure romance. She’s the wife of a
                  rock star, and the mother of two young adults, but she’s also
                  been a ballerina, a typographer, a film composer, a piano
                  player, a singer in an all-girl rock band, and a voice in
                  those violent video games you won’t let your kids play. She
                  does her best writing on cruise ships, in Scottish castles, on
                  her husband’s tour bus, and at home in her sunny southern
                  California garden. Glynnis loves to play medieval matchmaker,
                  transporting readers to a place where the bold heroes have
                  endearing flaws, the women are stronger than they look, the
                  land is lush and untamed, and chivalry is alive and well
                </div>
              </div>
              <hr className="mb40" />
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Post;
