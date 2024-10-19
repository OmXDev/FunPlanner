import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import CreateEvent from './components/pages/CreateEvent';
import EventDetails from './components/pages/Event-Details/EventDetails';
import Home from './_root/pages/Home';
import RootLayout from './_root/RootLayout';

// Create browser router
const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/create-event',
        element: <CreateEvent />
      },
      {
        path: '/event/:id',
        element: <EventDetails />
      }
    ]
  },
  {
    path: '/login',
    element: <SigninForm />
  },
  {
    path: '/register',
    element: <SignupForm />
  }
]);

const App = () => {
  return (
    <RouterProvider router={browserRouter} />
  );
};



export default App;
