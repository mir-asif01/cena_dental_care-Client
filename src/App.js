import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Home from './Pages/Common/Home';
import Services from './Pages/Common/Services';

function App() {

  const routes = createBrowserRouter([
    {
      path : '/',
      element : <Main></Main>,
      children : [
        {
          path : '/',
          element : <Home></Home>
        },
        {
          path : '/services',
          element : <Services></Services>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
