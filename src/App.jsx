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
import Myprofile from "./Components/Myprofile/Myprofile";
import Score from "./Components/Score/Score";
import Settings from "./Components/Settings/Settings";
import PasswordManger from "./Components/PasswordManger/PasswordManger";
import DeleteAccount from "./Components/DeleteAccount/DeleteAccount";
import Forgotpassword from "./Components/Forgotpassword/Forgotpassword";

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
      {path: "forgotpassword", element: <Forgotpassword/>},
      {path: "profile", element: <Profile/>},
      {path: "Myprofile", element: <Myprofile/>},
      {path: "Score", element: <Score/>},
      {path: "Settings", element: <Settings/>},
      {path: "PasswordManger", element: <PasswordManger/>},
      {path: "DeleteAccount", element: <DeleteAccount/>},
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
