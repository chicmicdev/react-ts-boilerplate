import { AppLayoutProps } from '../AppLayout.types';
import Navbar from '../Public/Navbar';

function PrivateLayout({ children }: AppLayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default PrivateLayout;
