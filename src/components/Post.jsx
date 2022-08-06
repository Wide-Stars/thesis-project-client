import { useEffect, useState } from 'react';
import '../styles/post.css';
import img from '../assets/8b167af653c2399dd93b952a48740620.jpg';
import axios from 'axios';

const Post = () => {
  const [postData, setPostData] = useState([]);

  const getPostData = async () => {
    const token = localStorage.getItem('token');
    const data = await axios.get('http://localhost:3000/api/post/get/all', {
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
    <div class="container bootstrap snippets bootdey">
      {postData.length > 0 &&
        postData.map((data) => (
          <div class="row">
            <div class="post-list ">
              <div class="row">
                <div class="col-sm-2">
                  <div class="picture">
                    <img alt="Opt wizard thumbnail" src={img} />
                  </div>
                </div>
                <div class="col-sm-6">
                  <h4>
                    <a hre="#" class="username">
                      {data.postedBy.name}
                    </a>
                  </h4>
                  <h5>
                    <i class="fa fa-calendar"></i>
                    {data.dateCreated}
                  </h5>
                  <h1 className="mb-3">{data.title}</h1>
                  <p class="description">{data.content}</p>
                </div>
                <div class="col-sm-4" data-no-turbolink="">
                  <a
                    class="btn btn-info btn-download btn-round pull-right makeLoading"
                    href="#"
                  >
                    <i class="fa fa-share"></i> View
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Post;
