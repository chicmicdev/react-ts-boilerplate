import './navbar.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ROUTES } from '../../../Shared/Constants';
import LocaleSwitcher from '../LocalSwitcher';
import CommonModal from '../CommanModal';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header d-flex" id="header">
      <Link to={ROUTES.HOMEPAGE}>Home page</Link>
      <Link to={ROUTES.LOGIN}>Login</Link>
      <div>
        {' '}
        <LocaleSwitcher />
      </div>
      <div>
        <button type="button" onClick={() => setIsOpen(true)}>
          {' '}
          Open Common Modal
        </button>
      </div>
      <CommonModal
        title="Hello Modal"
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
      />
    </header>
  );
}

export default Navbar;
