import { Component } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { User } from "@utilities/user";

const Logout: Component = () => {
  const navigate = useNavigate();

  User.deleteUser();
  navigate("/auth/login", { replace: true });

  return null;
};

export default Logout;
