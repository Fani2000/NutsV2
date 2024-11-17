import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/style.css";
import "./css/satoshi.css";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import { ProductProvider } from "./context/ProductContext";

const client = new ApolloClient({
  uri: "http://localhost:8002/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductProvider>
      <ThemeProvider>
        <Router>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
          ,
        </Router>
      </ThemeProvider>
    </ProductProvider>
  </React.StrictMode>
);
