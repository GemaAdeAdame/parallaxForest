import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Home /> </>
    },
    {
      path:"/Register",
      element:<> <Register />  </>
    },
    {
      path: "/Login",
      element: <> < Login/> </>
    }

  ]);

  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}

export default App;

