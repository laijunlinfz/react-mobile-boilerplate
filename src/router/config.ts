import React from 'react';
import { RouteConfig } from 'react-router-config';

const routes: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    component: React.lazy(() => import(/* webpackChunkName: 'pages/home' */ '@/pages/home'))
  },
  {
    path: "/login",
    exact: true,
    component: React.lazy(() => import(/* webpackChunkName: 'pages/login' */ '@/pages/login'))
  },
  {
    component: React.lazy(() => import(/* webpackChunkName: 'pages/notFound' */ '@/pages/notFound')),
    name: '404'
  }
];

export default routes;
