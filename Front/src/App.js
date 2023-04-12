import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/login/Login';
import Register from './components/registro/register';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Home /> </>
    },
    {
      path:"/Register",
      element:<><Register />  </>
    },
    {
      path:"/Login",
      element:<><Login /> </>
    }

  ]);

  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
