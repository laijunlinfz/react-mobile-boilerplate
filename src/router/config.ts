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
    path: "/resume",
    exact: true,
    component: React.lazy(() => import(/* webpackChunkName: 'pages/resume' */ '@/pages/resume'))
  },
  {
    path: "/test",
    exact: true,
    component: React.lazy(() => import(/* webpackChunkName: 'pages/test' */ '@/pages/test'))
  },
  {
    path: "/hooktest",
    exact: true,
    component: React.lazy(() => import(/* webpackChunkName: 'pages/hooktest' */ '@/pages/hookTest'))
  },
  {
    component: React.lazy(() => import(/* webpackChunkName: 'pages/404' */ '@/pages/404')),
    name: '404'
  }
];

export default routes;
