import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SuperAdminLayout() {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "superadmin") {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <Outlet />
    </>
  );
}
