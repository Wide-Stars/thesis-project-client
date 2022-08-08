import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/singlePost.css';
import { useLocation } from 'react-router-dom';

const Post = () => {
  const path = useLocation().pathname.split('/')[2];
  const [postData, setPostData] = useState([]);

  const getPostData = async () => {
    const token = localStorage.getItem('token');
    const data = await axios.get(`http://localhost:3000/api/post/get/${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setPostData(data.data);
  };

  useEffect(() => {
    getPostData();
    console.log(postData);
  }, []);
  return (
    <>
      <div className="container pb50">
        <div className="mt-3">
          <article>
            <img
              src="https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="img-fluid mb30"
            />
            <div className="post-content">
              <h3>{postData.title}</h3>
              <hr className="mb-40" />
              <p>{postData.content}</p>
              <ul className="list-inline share-buttons">
                <li className="list-inline-item">Share Post:</li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="social-icon-sm si-dark si-colored-facebook si-gray-round"
                  >
                    <i className="fa fa-facebook" />
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="social-icon-sm si-dark si-colored-twitter si-gray-round"
                  >
                    <i className="fa fa-twitter" />
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="social-icon-sm si-dark si-colored-linkedin si-gray-round"
                  >
                    <i className="fa fa-linkedin" />
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
              <hr className="mb40" />
              <h3 className="mb40 text-uppercase font500">About Author</h3>
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
