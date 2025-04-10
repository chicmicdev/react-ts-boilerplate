import { ReactNode } from 'react';
import { SnackbarProvider } from 'notistack';

interface NotificationWrapperProps {
  children: ReactNode;
}
export function NotificationWrapper({ children }: NotificationWrapperProps) {
  return <SnackbarProvider>{children}</SnackbarProvider>;
}

export default NotificationWrapper;
