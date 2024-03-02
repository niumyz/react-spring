import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './styles.scss';

declare global {
    namespace NodeJS {
        interface ProcessEnv {}
    }
}

const App = () => {
    return <h1>Hello World</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
