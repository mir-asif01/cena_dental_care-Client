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
import AddService from './Pages/AddService/AddService';
import EditReview from './Pages/MyReviews/EditReview/EditReview';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {

  const routes = createBrowserRouter([
    {
      path : '/',
      element : <Main></Main>,
      children : [
        {
          path : '/',
          loader : ()=> fetch('https://cena-dental-care-server.vercel.app/home'),
          element : <Home></Home>
        },
        {
          path : '/services',
          loader : ()=> fetch('https://cena-dental-care-server.vercel.app/services'),
          element : <Services></Services>
        },
        {
          path : '/blog',
          element : <Blog></Blog>
        },
        {
          path : 'services/:id',
          loader : ({params})=> fetch(`https://cena-dental-care-server.vercel.app/services/${params.id}`),
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
          element : <PrivateRoute><MyRevies></MyRevies></PrivateRoute>
        },
        {
          path : 'reviews/:id',
          loader : ({params})=> fetch(`https://cena-dental-care-server.vercel.app/reviews/${params.id}`),
          element : <EditReview></EditReview>
        },
        {
          path : 'addservice',
          element : <PrivateRoute><AddService></AddService></PrivateRoute>
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
