import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Table = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);

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
    console.log(data.data);
    setLoading(false);
  };
  useEffect(() => {
    getTable();
  }, [pathname]);

  return (
    <div className=" table">
      <div className="container">
        <div className="row">
          {loading && (
            <div className="text-center container d-flex justify-content-center align-items-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

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
                    {tableData.map((item, index) => (
                      <tr className="text-center">
                        <th scope="row">{index + 1}</th>
                        <th scope="row">{item.postedBy?._id}</th>
                        <td>{item.postedBy?.name}</td>
                        <td>{item?.postedBy.batch}</td> <td>{item.title}</td>
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
  );
};

export default Table;
