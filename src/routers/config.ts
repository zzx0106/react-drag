import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
export interface RoutesConfig extends RouteProps {
  path?: string;
  redirce?: string;
  children?: RoutesConfig[];
}
import HomePage from 'src/pages/Home';

const BusPage = lazy(() => import('@/pages/event_bus_test/event_bus_page'));

const TransferPage = lazy(() => import('@/pages/transfer/transfer'));
const TransferChildOnePage = lazy(() => import('@/pages/transfer/transfer'));
export const Routes: RoutesConfig[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/bus',
    component: BusPage,
  },
  {
    path: '/transfer',
    component: TransferPage,
    children: [
      {
        path: '/transfer/child_one',
        component: TransferChildOnePage,
      },
    ],
  },
];
