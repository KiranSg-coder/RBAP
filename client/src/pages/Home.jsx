import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { post } from "../services/ApiEndpoint";
import { Logout } from "../redux/AuthSlice";

export default function Home() {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gotoAdmin = () => {
    navigate("/admin");
  };

  const gotoSuperAdmin = () => {
    navigate("/superadmin");
  };

  const gotoManager = () => {
    navigate("/manager");
  };

  const handleLogout = async () => {
    try {
      const request = await post("/api/auth/logout");
      const response = request.data;
      if (request.status === 200) {
        dispatch(Logout());
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-container">
      <div className="user-card">
        <h2>Welcome, {user && user.name}</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
        {user && user.role === "admin" && (
          <button className="admin-btn" onClick={gotoAdmin}>
            Go To Admin
          </button>
        )}
        {user && user.role === "superadmin" && (
          <button className="superadmin-btn" onClick={gotoSuperAdmin}>
            Go To SuperAdmin
          </button>
        )}
        {user && user.role === "manager" && (
          <button className="manager-btn" onClick={gotoManager}>
            Go To Manager
          </button>
        )}
        {user && (
          <div className="user-info-table">
            <h3>Your Details</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
