import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import './styles.scss';

import App from './app/app';
import { Provider } from 'react-redux';
import store from './app/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
