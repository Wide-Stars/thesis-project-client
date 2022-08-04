import React from 'react';
import '../styles/singlePost.css';

const Post = () => {
  return (
    <>
      <div className="container pb50">
        <div className="row">
          <div className="col-md-9 mb40">
            <article>
              <img
                src="https://bootdey.com/img/Content/bg1.jpg"
                alt=""
                className="img-fluid mb30"
              />
              <div className="post-content">
                <h3>A smart template that works 24/7 for your company</h3>
                <ul className="post-meta list-inline">
                  <li className="list-inline-item">
                    <i className="fa fa-user-circle-o" />{' '}
                    <a href="#">John Doe</a>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-calendar-o" />{' '}
                    <a href="#">29 June 2017</a>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-tags" /> <a href="#">Bootstrap4</a>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo,{' '}
                </p>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo,{' '}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo,{' '}
                </p>
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
                <h4 className="mb40 text-uppercase font500">About Author</h4>
                <div className="media mb40">
                  <i className="d-flex mr-3 fa fa-user-circle fa-5x text-primary" />
                  <div className="media-body">
                    <h5 className="mt-0 font700">Jane Doe</h5> Cras sit amet
                    nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin. Cras purus odio, vestibulum in vulputate
                    at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                    vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </div>
                </div>
                <hr className="mb40" />
                <h4 className="mb40 text-uppercase font500">Comments</h4>
                <div className="media mb40">
                  <i className="d-flex mr-3 fa fa-user-circle-o fa-3x" />
                  <div className="media-body">
                    <h5 className="mt-0 font400 clearfix">
                      <a href="#" className="float-right">
                        Reply
                      </a>
                      Jane Doe
                    </h5>{' '}
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                    lacinia congue felis in faucibus.
                  </div>
                </div>
                <div className="media mb40">
                  <i className="d-flex mr-3 fa fa-user-circle-o fa-3x" />
                  <div className="media-body">
                    <h5 className="mt-0 font400 clearfix">
                      <a href="#" className="float-right">
                        Reply
                      </a>
                      Jane Doe
                    </h5>{' '}
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                    lacinia congue felis in faucibus.
                  </div>
                </div>
                <div className="media mb40">
                  <i className="d-flex mr-3 fa fa-user-circle-o fa-3x" />
                  <div className="media-body">
                    <h5 className="mt-0 font400 clearfix">
                      <a href="#" className="float-right">
                        Reply
                      </a>
                      Jane Doe
                    </h5>{' '}
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                    lacinia congue felis in faucibus.
                  </div>
                </div>
                <hr className="mb40" />
                <h4 className="mb40 text-uppercase font500">Post a comment</h4>
                <form role="form">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="john@doe.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Comment</label>
                    <textarea
                      className="form-control"
                      rows={5}
                      placeholder="Comment"
                      defaultValue={''}
                    />
                  </div>
                  <div className="clearfix float-right">
                    <button type="button" className="btn btn-primary btn-lg">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </article>
            {/* post article*/}
          </div>
          <div className="col-md-3 mb40">
            <div className="mb40">
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-addon" id="basic-addon2">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </form>
            </div>
            {/*/col*/}
            <div className="mb40">
              <h4 className="sidebar-title">Categories</h4>
              <ul className="list-unstyled categories">
                <li>
                  <a href="#">Rent</a>
                </li>
                <li>
                  <a href="#">Sale</a>
                </li>
                <li className="active">
                  <a href="#">Apartment</a>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Office</a>
                    </li>
                    <li>
                      <a href="#">Godown</a>
                    </li>
                    <li>
                      <a href="#">Gerage</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Top Rating</a>
                </li>
                <li>
                  <a href="#">Trending</a>
                </li>
                <li>
                  <a href="#">Newest Properties</a>
                </li>
              </ul>
            </div>
            {/*/col*/}
            <div>
              <h4 className="sidebar-title">Latest News</h4>
              <ul className="list-unstyled">
                <li className="media">
                  <img
                    className="d-flex mr-3 img-fluid"
                    width={64}
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt="Generic placeholder image"
                  />
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">
                      <a href="#">Lorem ipsum dolor sit amet</a>
                    </h5>{' '}
                    April 05, 2017
                  </div>
                </li>
                <li className="media my-4">
                  <img
                    className="d-flex mr-3 img-fluid"
                    width={64}
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt="Generic placeholder image"
                  />
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">
                      <a href="#">Lorem ipsum dolor sit amet</a>
                    </h5>{' '}
                    Jan 05, 2017
                  </div>
                </li>
                <li className="media">
                  <img
                    className="d-flex mr-3 img-fluid"
                    width={64}
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt="Generic placeholder image"
                  />
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">
                      <a href="#">Lorem ipsum dolor sit amet</a>
                    </h5>{' '}
                    March 15, 2017
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
