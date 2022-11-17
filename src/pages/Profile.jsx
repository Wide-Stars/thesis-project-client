import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import { htmlToText } from 'html-to-text';
import moment from 'moment';

const Profile = () => {
  const path = useLocation().pathname.split('/')[2];
  const [postData, setPostData] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(true);

  const getPostData = async () => {
    const token = localStorage.getItem('token');
    const data = await axios.get(
      `https://node-server-1.onrender.com/api/post/get/user-post/${path}`,
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
    if (newData.length === 0) {
      const userInfo = await axios.get(
        `https://node-server-1.onrender.com/api/user/${path}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserInfo(userInfo.data);
      setLoading(false);
      return;
    }

    setPostData(newData);
    setUserInfo(newData[0].postedBy);
    setLoading(false);
  };

  useEffect(() => {
    getPostData();
  }, []);
  return (
    <div className="container">
      {loading && (
        <div className="text-center container d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!loading && (
        <div className="container mt-4">
          <div className="">
            <div className="row ">
              <div className="col-md-3">
                <div className="card mt-3">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={`https://bootdey.com/img/Content/avatar/avatar${
                          userInfo?.avatar ? userInfo?.avatar : '7'
                        }.png`}
                        alt="Admin"
                        className="rounded-circle h-25 "
                        width={150}
                      />
                      <div className="mt-3">
                        <h4 className="text-break">{userInfo?.name}</h4>{' '}
                        <span></span>
                        <p className="text-muted font-size-sm">
                          {userInfo?.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mt-3  ">
                  <div className="card-body">
                    <div className="row text-left ">
                      <div className="col-sm-4 ">
                        <h6 className="ml-">Full Name</h6>
                      </div>
                      <div className="col-sm-7 text-secondary">
                        {userInfo?.name}
                      </div>
                    </div>
                    <hr />
                    <div className="row text-left ">
                      <div className="col-sm-4">
                        <h6 className="ml-">Email</h6>
                      </div>
                      <div className="col-sm-7 text-secondary">
                        {userInfo?.email}
                      </div>
                    </div>
                    <hr />

                    <div className="row text-left ">
                      <div className="col-sm-4">
                        <h6 className="ml-">Batch</h6>
                      </div>
                      <div className="col-sm-7 text-secondary">
                        {userInfo?.batch}
                      </div>
                    </div>
                    <hr />
                    <div className="row text-left ">
                      <div className="col-sm-4">
                        <h6 className="ml-">ID</h6>
                      </div>
                      <div className="col-sm-7 text-secondary">
                        {userInfo?._id}
                      </div>
                    </div>
                    <hr />
                  </div>
                  <Link className="  mb-3 mt-0 text-center" to={'/add-post'}>
                    <button type="button" className="btn btn-info">
                      Create a new Project or Thesis
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-md-9">
                {postData.length === 0 && (
                  <div className="card">
                    <div className="card-body p-5 text-center">
                      <h3>You don't have any post</h3>
                    </div>
                  </div>
                )}
                {postData.length > 0 && (
                  <div className=" mt-3">
                    <div className="table-responsive-md">
                      <table className="table table-striped">
                        <thead>
                          <tr className="text-center">
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Batch</th>
                            <th scope="col">project name</th>
                            <th scope="col">supervisor name</th>
                            <th scope="col">URL</th>
                          </tr>
                        </thead>
                        <tbody>
                          {postData.map((item, index) => (
                            <tr className="text-center">
                              <th scope="row">{index + 1}</th>
                              <th scope="row">{item.postedBy?._id}</th>
                              <td>{item.postedBy?.name}</td>
                              <td>{item?.postedBy.batch}</td>{' '}
                              <td>{item.title}</td>
                              <td>{item.supervisorName}</td>
                              <td>
                                <Link
                                  className="btn btn-outline-success"
                                  to={`/post/${item._id}`}
                                >
                                  visit
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
