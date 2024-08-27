import React, { useEffect, useState } from "react";
import { deleteUser, get, put } from "../services/ApiEndpoint";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function SuperAdmin() {
  const [users, setUsers] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const GetUsers = async () => {
      try {
        const request = await get("/api/superadmin/getuser");
        const respnse = request.data;
        if (request.status === 200) {
          setUsers(respnse.users);
        }
      } catch (error) {
        console.log(error);
      }
    };
    GetUsers();
  }, [users]);

  const handleDelet = async (id) => {
    try {
      const request = await deleteUser(`/api/superadmin/delete/${id}`);
      const response = request.data;
      if (request.status === 200) {
        toast.success(response.message);
        console.log(response);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  const handleRoleChange = async (id, newRole) => {
    try {
      const request = await put(`/api/superadmin/update-role/${id}`, {
        role: newRole,
      });
      const response = request.data;
      if (request.status === 200) {
        toast.success(response.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="admin-container">
        <h2>Manage Users</h2>
        <button className="goto-btn" onClick={goToHome}>
          Go to Home
        </button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((elem, index) => {
                return (
                  <tr key={index}>
                    <td>{elem.name}</td>
                    <td>{elem.email}</td>
                    <td>
                      <select
                        value={elem.role}
                        onChange={(e) =>
                          handleRoleChange(elem._id, e.target.value)
                        }
                      >
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                      </select>
                    </td>
                    <td>
                      <button onClick={() => handleDelet(elem._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
