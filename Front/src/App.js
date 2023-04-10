import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
/*import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Repos from "./components/Repos";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import MusicPlayer from "./components/MusicPlayer";*/
import Login from "./components/login/Login"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        
          <Login />
          
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;



