import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import { htmlToText } from 'html-to-text';

const Profile = () => {
  const path = useLocation().pathname.split('/')[2];
  const [postData, setPostData] = useState([]);

  const getPostData = async () => {
    const token = localStorage.getItem('token');
    const data = await axios.get(
      `http://localhost:3000/api/post/get/user-post/${path}`,
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
  };

  useEffect(() => {
    getPostData();
  }, []);

  const userInfo = postData[0]?.postedBy;
  console.log(postData);

  return (
    <div className="container mt-4">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card mt-3">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle h-25"
                    width={150}
                  />
                  <div className="mt-3">
                    <h4>{userInfo?.name}</h4> <span></span>
                    <p className="text-muted font-size-sm">{userInfo?.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-3 ">
              <div className="row text-left ">
                <div className="col-sm-4 ">
                  <h6 className="">Full Name</h6>
                </div>
                <div className="col-sm-7 text-secondary">{userInfo?.name}</div>
              </div>
              <hr />
              <div className="row text-left ">
                <div className="col-sm-4">
                  <h6 className="">Email</h6>
                </div>
                <div className="col-sm-7 text-secondary">{userInfo?.email}</div>
              </div>
              <hr />

              <div className="row text-left ">
                <div className="col-sm-4">
                  <h6 className="">Account type:</h6>
                </div>
                <div className="col-sm-7 text-secondary">
                  {userInfo?.isSupervisor ? '  Supervisor' : '  Student'}
                </div>
              </div>
              <hr />

              <Link className="text-center mb-3" to={'/add-post'}>
                <button type="button" class="btn btn-info">
                  Create new post
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-8">
            {postData.length > 0 &&
              postData.map((data) => (
                <div className="card mt-3" key={data._id}>
                  <div className="card-body">
                    <div className="row" key={data._id}>
                      <div className="post-list ">
                        <div className="row">
                          <div className="col-sm-3">
                            {/* img */}
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
  );
};

export default Profile;
