import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import Search from "./Components/Search/Search";
import Profile from "./Components/Profile/Profile";
import NotFound from "./Components/NotFound/NotFound";
import Cover from "./Components/Cover/Cover";
import About from "./Components/About/About";

function App() {
  
  const routes =createBrowserRouter([
    { path: "/", element: <Layout /> , children: [
      {index: true, element: <Cover /> },
      { path: "home", element: <Home /> },
      {path:"contact", element:<Contact/>},
      {path: "about", element: <About />},
      {path: "sign up", element: <SignUp />},
      {path:"sign in", element: <SignIn/>},
      {path: "Search", element: <Search/>},
      {path: "profile", element: <Profile/>},
      {path: "*", element: <NotFound />},
    ] },
  ])

  return (
    <>
      <RouterProvider router={routes}>

      </RouterProvider>
    </>
  );
}

export default App;
