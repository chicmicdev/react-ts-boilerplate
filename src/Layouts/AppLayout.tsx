import { memo } from 'react';
import PrivateLayout from './Private/PrivateLayout';
import PublicLayout from './Public/PublicLayout';
import { AppLayoutProps } from './AppLayout.d';

const AppLayout = memo(({ isAuthenticated, children }: AppLayoutProps) => {
  const Layout = isAuthenticated ? PrivateLayout : PublicLayout;
  return <Layout>{children}</Layout>;
});

export default AppLayout;
