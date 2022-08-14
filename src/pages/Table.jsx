import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Table = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);

  // const redirect = pathname == '/table/project' || pathname == '/table/thesis';

  // if (!redirect) {
  //   navigate('/error');
  // }

  const getTable = async () => {
    const token = localStorage.getItem('token');
    const data = await axios.get(
      `https://thesis-app-io.herokuapp.com/api/post/get/table/${
        pathname.split('/')[2] === 'project' ? 'project' : 'thesis'
      }`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setTableData(data.data);

    setLoading(false);
  };
  useEffect(() => {
    getTable();
  }, []);

  return (
    <>
      {loading && (
        <div class="text-center container d-flex justify-content-center align-items-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* <div className="card ">
        <div className="card-body p-5 text-center">
          <Link className="btn btn-outline-danger" to={'/add-post'}>
            {`Create a new ${pathname.split('/')[2]}`}{' '}
          </Link>
        </div>
      </div> */}

      {loading === false && tableData.length === 0 && (
        <div className="card ">
          <div className="card-body p-5 text-center">
            <h3>You don't have any post</h3>
          </div>
        </div>
      )}

      {!loading && (
        <div className="container mt-3">
          <div className="table-responsive-md">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Batch</th>
                  <th scope="col">project name</th>
                  <th scope="col">supervisor name</th>
                  <th scope="col">URL</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr>
                    <th scope="row">{item.postedBy?._id}</th>
                    <td>{item.postedBy?.name}</td>
                    <td>{item?.postedBy.batch}</td> <td>{item.title}</td>
                    <td>{item.supervisorName}</td>
                    <td>
                      <Link
                        class="btn btn-outline-success"
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
    </>
  );
};

export default Table;
