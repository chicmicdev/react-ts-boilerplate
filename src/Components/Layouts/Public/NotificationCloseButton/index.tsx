import { closeSnackbarHandler } from '../../../../Models';

interface NotificationWrapperProps {
  closeSnackbar: closeSnackbarHandler;
  id: string;
}
export default function NotificationCloseButton({
  closeSnackbar,
  id,
}: NotificationWrapperProps) {
  return (
    <button
      type="button"
      style={{
        background: 'red',
        color: '#000',
      }}
      onClick={() => closeSnackbar(id)}
    >
      <svg
        style={{
          width: 10,
          height: 10,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          fill="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
