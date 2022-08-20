import { useEffect, useState } from 'react';
import '../styles/post.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { htmlToText } from 'html-to-text';
import moment from 'moment';

const Post = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);

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

    const newData = data.data.map((item) => ({
      ...item,
      content: htmlToText(item.content)
        .split(' ')
        .slice(0, 30)
        .join(' ')
        .concat('......'),
    }));

    setPostData(newData);
    setLoading(false);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      {loading && (
        <div className="text-center container d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!loading && (
        <div className="container bootstrap snippets bootdey">
          {postData.length === 0 && (
            <div className="card ">
              <div className="card-body p-5 text-center">
                <h3>You don't have any post</h3>
              </div>
            </div>
          )}
          {postData.length > 0 &&
            postData.map((data) => {
              return (
                <div className="card mt-3" key={data._id}>
                  <div className="card-body">
                    <div className="row">
                      <div className="post-list ">
                        <div className="row">
                          <div className="col-sm-2 text-center">
                            <div className="picture">
                              <img
                                alt="Opt wizard thumbnail"
                                src={`https://bootdey.com/img/Content/avatar/avatar${data.postedBy?.avatar
                                    ? data.postedBy?.avatar
                                    : '7'
                                  }.png`}
                              />
                            </div>
                            {data.isApproved ? (
                              <span className=" m-3 badge text-bg-success">
                                Approved
                              </span>
                            ) : (
                              <span className="badge text-bg-warning">Pending</span>
                            )}
                          </div>

                          <div className="col-sm-6">
                            <h4>
                              <a hre="#" className="nav-link text-info">
                                {data.postedBy?.name}
                              </a>
                            </h4>
                            <h5>
                              <i className="fa fa-calendar"></i>
                              {moment(data.dateCreated).format('D MMM YYYY')}
                            </h5>
                            <h2 className="mb-3">{data.title}</h2>

                            <p className="description">{data.content}</p>
                          </div>
                          <div className="col-sm-4" data-no-turbolink="">

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
              );
            })}
        </div>
      )}
    </>
  );
};

export default Post;
