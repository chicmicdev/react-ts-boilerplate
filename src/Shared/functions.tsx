import NotificationCloseButton from '../Layouts/Public/NotificationCloseButton';
import { closeSnackbarHandler } from '../Models';

// eslint-disable-next-line import/prefer-default-export
export const firstLetterUpperCase = (message: string) => {
  if (message && message.length > 0) {
    return (
      message[0].toUpperCase() +
      message.substring(1, message.length).toLowerCase()
    );
  }
  return '';
};

export const handleCloseNotification = (
  closeSnackbar: closeSnackbarHandler,
  id: string
) => <NotificationCloseButton closeSnackbar={closeSnackbar} id={id} />;
