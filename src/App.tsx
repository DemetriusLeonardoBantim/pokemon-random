import React from 'react';
import {GlobalStyle} from './styles/global'
import {Home} from './views/pages/Home'
import {BackgroundProvider} from './hooks/useBackground'



function App() {
  return (
    <>
      <BackgroundProvider>
        <Home/>
        <GlobalStyle/>
      </BackgroundProvider>
    </>
  );
}

export default App;
