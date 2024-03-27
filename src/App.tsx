import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/integration/react';
import { ErrorBoundary } from 'react-error-boundary';
import { store, persistor } from './Store';
import RootRouter from './Routes/RootRouter';
import { NotificationWrapper } from './Components/Layouts/Public/NotificationWrapper';
import './App.css';
import ErrorFallback from './Components/Layouts/Public/ErrorFallback';

const baseName = import.meta.env.VITE_BASE_NAME;

function App() {
  // const [count, setCount] = useState<number>(0);
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <HelmetProvider>
            <NotificationWrapper>
              <BrowserRouter basename={baseName}>
                <RootRouter />
              </BrowserRouter>
            </NotificationWrapper>
          </HelmetProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
