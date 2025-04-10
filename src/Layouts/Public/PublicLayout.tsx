import { AppLayoutProps } from '../AppLayout.types';
import Navbar from './Navbar';

function PublicLayout({ children }: AppLayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default PublicLayout;
