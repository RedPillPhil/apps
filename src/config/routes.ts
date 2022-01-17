import { RouteProps } from 'react-router-dom';
import { Page404 } from '../components/widget/Page404';
import { Account } from '../pages/Account';
import { Migration } from '../pages/Migration';
import { Portal } from '../pages/Portal';
import { Staking } from '../pages/Staking';
import { Toolbox } from '../pages/Toolbox';

export enum Path {
  root = '/',
  account = '/account',
  staking = '/staking',
  toolbox = '/toolbox',
  portal = '/portal',
  migration = '/migration',
}

export const routes: RouteProps[] = [
  {
    exact: true,
    path: Path.root,
    children: Account,
  },
  {
    exact: true,
    path: Path.account,
    children: Account,
  },
  {
    exact: true,
    path: Path.staking,
    children: Staking,
  },
  {
    exact: true,
    path: Path.toolbox,
    children: Toolbox,
  },
  {
    exact: true,
    path: Path.portal,
    children: Portal,
  },
  {
    exact: true,
    path: Path.migration,
    children: Migration,
  },
  {
    path: '*',
    children: Page404,
  },
];