import React from 'react';
import { render as reactRender } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

const rootEl = document.getElementById('root');
const render = Component =>
  reactRender(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) {
  module.hot.accept('./components/App', () => render(require('./components/App').default));
}

