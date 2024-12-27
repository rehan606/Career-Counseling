import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import MainLayout from './components/MainLayout.jsx';
import AuthLayout from './components/AuthLayout.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import ServiceDetails from './components/ServiceDetails.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Profile from './pages/Profile.jsx';
import PrivetRouter from './routers/PrivetRouter.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ServicesList from './components/ServicesList.jsx';
import ServiceRouter from './routers/ServiceRouter.jsx';
import { HelmetProvider } from 'react-helmet-async';
import ForgetPassword from './pages/ForgetPassword.jsx';
import ProfileRouter from './routers/ProfileRouter.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/service/:id",
    element: (
      <PrivetRouter>
        <ServiceDetails></ServiceDetails>
      </PrivetRouter>) ,
    loader: ()=> fetch('/services.json')
  },
  {
    path: '/about',
    element: <About></About>,
  },
  {
    path: '/contact',
    element: <Contact></Contact>,
  },
  {
    path: '/profile',
    element: <ProfileRouter> <Profile></Profile> </ProfileRouter>,
  },
  {
    path: 'auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>,
      },
      {
        path: '/auth/forgetPassword',
        element: <ForgetPassword></ForgetPassword>,
      },
    ]
  },
  {
    path: '/serviceList',
    element: <ServiceRouter><ServicesList></ServicesList></ServiceRouter>,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthProvider>
  </StrictMode>,
)
