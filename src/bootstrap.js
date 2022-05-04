
// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// ReactDOM.render(<App/>, document.getElementById("app"));

import React from 'react';
import reactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';


// Mount function to start up the app
export const mount = (root) => {
    
    // createRoot(container!) if you use TypeScript

    root.render(<App />);

};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    console.log("Entering dev mounting mode")
    const container = document.getElementById('app');
    const root = createRoot(container);

    if (root) {
        mount(root);
    }
}

// We are running through container
// and we should export the mount function



