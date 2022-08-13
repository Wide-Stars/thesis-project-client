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
      `https://thesis-app-io.herokuapp.com/api/post/get/user-post/${path}`,
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
        `https://thesis-app-io.herokuapp.com/api/user/${path}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserInfo(userInfo.data);
      console.log(userInfo.data);
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
  console.log(userInfo);
  return (
    <div className="container">
      {loading && (
        <div class="text-center container d-flex justify-content-center align-items-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!loading && (
        <div className="container mt-4">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card mt-3">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={`https://bootdey.com/img/Content/avatar/avatar${
                          userInfo?.avatar ? userInfo?.avatar : '7'
                        }.png`}
                        alt="Admin"
                        className="rounded-circle h-25"
                        width={150}
                      />
                      <div className="mt-3">
                        <h4>{userInfo?.name}</h4> <span></span>
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
                    <button type="button" class="btn btn-info">
                      Create a new Project or Thesis
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-md-8">
                {postData.length === 0 && (
                  <div className="card">
                    <div className="card-body p-5 text-center">
                      <h3>You don't have any post</h3>
                    </div>
                  </div>
                )}
                {postData.length > 0 &&
                  postData.map((data) => (
                    <div className="card mt-3" key={data._id}>
                      <div className="card-body">
                        <div className="row" key={data._id}>
                          <div className="post-list ">
                            <div className="row">
                              <div className="col-sm-3 text-center">
                                {/* img */}
                                <div className="picture">
                                  <img
                                    alt="Opt wizard thumbnail"
                                    src={`https://bootdey.com/img/Content/avatar/avatar${
                                      userInfo?.avatar ? userInfo?.avatar : '7'
                                    }.png`}
                                  />
                                </div>
                                {data.type === 'project' ? (
                                  <span class=" m-3 badge text-bg-success">
                                    Project
                                  </span>
                                ) : (
                                  <span class="badge text-bg-warning">
                                    Thesis
                                  </span>
                                )}
                              </div>
                              <div className="col-sm-6">
                                <h4>
                                  <a hre="#" className="nav-link text-info">
                                    {data.postedBy.name}
                                  </a>
                                </h4>
                                <h5>
                                  <i className="fa fa-calendar"></i>
                                  {moment(data.dateCreated).format(
                                    'D MMM YYYY'
                                  )}
                                  {/* {data.dateCreated} */}
                                </h5>
                                <h1 className="mb-3 text-break">
                                  {data.title}
                                </h1>
                                <p className="description text-break">
                                  {data.content
                                    .split(' ')
                                    .slice(0, 20)
                                    .join(' ') + '.......'}
                                </p>
                              </div>
                              <div className="col-sm-1" data-no-turbolink="">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
