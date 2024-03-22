import { useSnackbar } from 'notistack';
import {
  firstLetterUpperCase,
  handleCloseNotification,
} from '../Helpers/functions';

export default function useNotifications() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleNotification = (
    errorMessage: string,
    type: 'default' | 'error' | 'success' | 'warning' | 'info'
  ) => {
    enqueueSnackbar(firstLetterUpperCase(errorMessage ?? ''), {
      variant: type,
      autoHideDuration: 5000,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      action: (key) => handleCloseNotification(closeSnackbar, key as string),
    });
  };
  const notifySuccess = (errorMessage: string) =>
    handleNotification(errorMessage, 'success');

  const notifyError = (errorMessage: string) =>
    handleNotification(errorMessage, 'error');

  return { notifySuccess, notifyError };
}
