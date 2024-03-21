import React, { useMemo } from 'react';
import {
  Navigate,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Unauthorized from './Layouts/Unauthorized';
import Home from './Pages/Unauthorized/Home';
import Authorized from './Layouts/Authorized';
import Dashboard from './Pages/Authorized/Dashboard';
import { useAccount } from 'wagmi';
import PlayGame from './Pages/Authorized/PlayGame';
import LeaderBoard from './Pages/Authorized/LeaderBoard';

// import { Container } from './styles';

const unauthorizedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Unauthorized />,
    children: [
      { path: '/', element: <Home /> },
      { path: '*', element: <Navigate to="/" /> },
    ],
  },
];

const authorizedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Authorized />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/play', element: <PlayGame /> },
      { path: '/leaderboard', element: <LeaderBoard /> },
      { path: '*', element: <Navigate to="/" /> },
    ],
  },
];

const Routes: React.FC = () => {
  const { address } = useAccount();

  const routes = useMemo(() => {
    if (address) {
      return createBrowserRouter(authorizedRoutes);
    }
    return createBrowserRouter(unauthorizedRoutes);
  }, [address]);

  return <RouterProvider router={routes} />;
};

export default Routes;
