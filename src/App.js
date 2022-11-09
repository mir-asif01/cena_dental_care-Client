import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Home from './Pages/Common/Home';
import Services from './Pages/Common/Services';
import ServiceDetails from './Pages/Common/ServiceDetails';

function App() {

  const routes = createBrowserRouter([
    {
      path : '/',
      element : <Main></Main>,
      children : [
        {
          path : '/',
          loader : ()=> fetch('http://localhost:5000/home'),
          element : <Home></Home>
        },
        {
          path : '/services',
          loader : ()=> fetch('http://localhost:5000/services'),
          element : <Services></Services>
        },
        {
          path : 'services/:id',
          loader : ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
          element : <ServiceDetails></ServiceDetails>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
