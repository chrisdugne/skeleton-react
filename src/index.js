import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';

const App = (options = {}) => {
  if (!options.container) {
    console.error('[App] Requires a container.');
  }

  const container = document.getElementById(options.container);
  render(
    <div>
      <b>🚀 skeleton-react</b>
    </div>,
    container
  );
};

if (window && !window.App) {
  window.App = App;
}
