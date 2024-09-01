import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full-layout/loadable/Loadable';

/* ***Layouts*** */
const FullLayout = Loadable(lazy(() => import('../layouts/full-layout/FullLayout')));
const FullLayoutLanding = Loadable(lazy(() => import('../layouts/full-layout/FullLayoutLanding')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank-layout/BlankLayout')));

/* ***Pages*** */
const Home = Loadable(lazy(() => import('../views/home/Home')));

/* ***Authentication Pages*** */
const Error = Loadable(lazy(() => import('../views/Error/Error')));

interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

const Router: RouteConfig[] = [
  {
    path: '/',
    element: <Navigate to="/anh-algelab" />,
  },
  {
    path: '/anh-algelab',
    element: <FullLayoutLanding />,
    children: [
      { path: '', element: <Home /> },
    ],
  },
  {
    path: '/anh-algelab',
    element: <FullLayout />,
    children: [
      //{ path: 'laboratorios', element: <Experiments /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" replace /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/auth/404" replace />,
  },
];

export default Router;