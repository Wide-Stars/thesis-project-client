import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const getTable = async () => {
    const token = localStorage.getItem('token');
    const data = await axios.get(
      `http://localhost:3000/api/post/get/table/project`,
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

      {!loading && (
        <div>
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
              {/* <tr>
                <th scope="row">1</th>
                <td>Larry</td>
                <td>the Bird</td> <td>Larry</td>
                <td>the Bird</td>
                <td>
                  <button type="button" class="btn btn-outline-success">
                    visit
                  </button>
                </td>
              </tr> */}
              {tableData.map((item, index) => (
                <tr>
                  <th scope="row">{index}</th>
                  <td>{item.postedBy?.name}</td>
                  <td>{item?.title}</td> <td>tom</td>
                  <td>the a</td>
                  <td>
                    <button type="button" class="btn btn-outline-success">
                      visit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
