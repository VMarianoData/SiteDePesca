import {
    createBrowserRouter, Outlet, RouterProvider,
  } from 'react-router-dom';
import login from './login';
import home from './home';
import BoatForm from './BoatForm';
import boatList from './boatList'
import register from './register';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Calendar from './Calendar';
import Avaliacao from './Avaliacao';
import BoatDetailsLogin from './BoatDetailsLogin';
import ClienteDetalhes from './ClienteDetalhes';

  
  const routes = [{
    path: '',
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      ...home,
      ...register,
      ...BoatForm,
      ...boatList,
      ...Calendar,
      ...Avaliacao,
      ...BoatDetailsLogin,
      ...ClienteDetalhes
    ],
  },
];
  
  export default function RoutesApp() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: (
          <Outlet />
        ),
        children: [
          ...login,
          ...routes,
        ],
      },
    ]);
  
    return (
      <RouterProvider router={router} />
    );
  }
  