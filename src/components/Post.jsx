import { useEffect, useState } from 'react';
import '../styles/post.css';
import img from '../assets/8b167af653c2399dd93b952a48740620.jpg';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Post = () => {
  const [postData, setPostData] = useState([]);

  const getPostData = async () => {
    const token = localStorage.getItem('token');
    const data = await axios.get(
      'https://thesis-app-io.herokuapp.com/api/post/get/all',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setPostData(data.data);
  };

  useEffect(() => {
    getPostData();
    console.log(postData);
  }, []);

  return (
    <div className="container bootstrap snippets bootdey">
      {postData.length > 0 &&
        postData.map((data) => (
          <div className="card mt-3" key={data._id}>
            <div className="card-body">
              <div className="row">
                <div className="post-list ">
                  <div className="row">
                    <div className="col-sm-2">
                      <div className="picture">
                        <img
                          alt="Opt wizard thumbnail"
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h4>
                        <a hre="#" className="nav-link text-info">
                          {data.postedBy.name}
                        </a>
                      </h4>
                      <h5>
                        <i className="fa fa-calendar"></i>
                        {data.dateCreated}
                      </h5>
                      <h1 className="mb-3">{data.title}</h1>
                      <p className="description">{data.content}</p>
                    </div>
                    <div className="col-sm-4" data-no-turbolink="">
                      {/* <a
                    className="btn btn-info btn-download btn-round pull-right makeLoading"
                    href="#"
                  >
                    <i className="fa fa-share"></i> View
                  </a> */}

                      <Link
                        className="btn btn-info btn-download btn-round pull-right makeLoading"
                        to={`/post/${data._id}`}
                      >
                        <i className="fa fa-share"></i> View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Post;
