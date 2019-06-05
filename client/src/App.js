import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
//import AddUser from "./components/AddUser";
import ApolloClient from 'apollo-boost';
import About from "./components/About";
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', 
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
       <Route path="/" component={Home} exact/>
       <Route path="/about" component={About}/>
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
