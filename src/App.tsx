import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

import './App.css';
// import { UserProvider } from './providers/UserProvier';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        {/* <UserProvider> */}
        <Router />
        {/* </UserProvider> */}
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
