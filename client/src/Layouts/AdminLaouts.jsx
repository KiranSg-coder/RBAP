import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminLaouts() {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else if (user.role === "superadmin") {
      navigate("/superadmin");
    } else if (user.role !== "admin") {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <Outlet />
    </>
  );
}
