import Modal from 'react-modal';
import classes from './style.module.css';

interface CommanModalProps {
  isOpen: boolean;
  afterOpen?: () => void;
  closeModal?: () => void;
  title?: string;
  children?: JSX.Element[] | JSX.Element;
  hideHeader?: boolean;
  hideCloseButton?: boolean;
}

function CommonModal({
  isOpen,
  afterOpen = () => {},
  closeModal = () => {},
  title = '',
  children,
  hideHeader = false,
  hideCloseButton = false,
}: CommanModalProps) {
  const afterOpenModalHandler = () => {
    if (afterOpen) afterOpen();
  };

  const closeModalHander = () => {
    if (closeModal) closeModal();
  };
  return (
    <div>
      <Modal
        className={classes?.commonPopup}
        isOpen={isOpen}
        onAfterOpen={afterOpenModalHandler}
        onRequestClose={closeModalHander}
        contentLabel={title}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
          },
        }}
      >
        <div className={classes.commonPopupHeader}>
          {!hideHeader && <h2>{title}</h2>}
          {!hideCloseButton && (
            <button
              type="button"
              className={classes?.iconButton}
              onClick={closeModal}
            >
              &#10006;
            </button>
          )}
        </div>
        {children}
      </Modal>
    </div>
  );
}

export default CommonModal;
