import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Home from './Pages/Common/Home';
import Services from './Pages/Common/Services';
import ServiceDetails from './Pages/Common/ServiceDetails';
import Blog from './Pages/Common/Blog';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import MyRevies from './Pages/MyReviews/MyRevies';

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
          path : '/blog',
          element : <Blog></Blog>
        },
        {
          path : 'services/:id',
          loader : ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
          element : <ServiceDetails></ServiceDetails>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/signup',
          element : <SignUp></SignUp>
        },
        {
          path : 'myreviews',
          element : <MyRevies></MyRevies>
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
