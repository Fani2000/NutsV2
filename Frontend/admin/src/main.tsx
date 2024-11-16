import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import { ThemeProvider } from "@material-tailwind/react";

const client = new ApolloClient({
  uri: 'http://localhost:8002/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>,
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
);


