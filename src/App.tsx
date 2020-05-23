import React from 'react';

import Header from './Page/Header';
import Body from './Page/Body';
import Footer from './Page/Footer';

import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

function App() {
  return (
    <div>
      <Header />
      <Body></Body>
      <Footer />
    </div>
  );
}

export default App;
