import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { UserProvider } from './providers/UserProvier';
import Router from './router/Router';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Router />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
