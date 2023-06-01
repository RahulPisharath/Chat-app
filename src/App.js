import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";

import Body from "./components/Body";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Forgotpassword from "./components/Forgotpassword";

export default function App() {
  let element = useRoutes([
    {path: '/', element: <Login />},
    {path: '/chat', element: <Body />},
    {path: '/login', element: <Login />},
    {path:'/signup', element:<SignUp/>},
    {path:'/forgotpassword', element:<Forgotpassword/>}
  ]);

  return element;
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
