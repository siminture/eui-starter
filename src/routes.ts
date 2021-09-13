import { ReactNode } from 'react';

type RouteConfig = {
  key: string;
  name: string;
  icon?: string;
  path?: string;
  exact?: boolean;
  component?: ReactNode;
  children?: RouteConfig[];
};

const routes: RouteConfig[] = [
  {
    key: 'home',
    name: '网站',
  },
];

export default routes;
