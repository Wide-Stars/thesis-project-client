import React, { useState, useEffect } from 'react';

const Table = () => {
  const [loading, setLoading] = useState(true);
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
    console.log(data.data);
    setLoading(false);
  };
  useEffect(() => {
    getTable();
  }, []);

  return (
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
          <tr>
            <th scope="row">1</th>
            <td>Larry</td>
            <td>the Bird</td> <td>Larry</td>
            <td>the Bird</td>
            <td>
              <button type="button" class="btn btn-outline-success">
                visit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
