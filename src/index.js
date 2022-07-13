import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store, persistor } from './redux/store';
import App from './App';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
    {/* </Provider> */}
  </StrictMode>,
);
