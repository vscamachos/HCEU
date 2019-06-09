import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
//import AddUser from "./components/AddUser";
import ApolloClient from 'apollo-boost';
import About from "./components/About";
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'semantic-ui-css/semantic.min.css';
import './css/main.css'
import Login from './components/login';
import InitialEvaluation from './components/initialEvaluation';
import Faq from './components/faq/index';

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
       <Route path="/login" component={Login}/>
       <Route path="/initialevaluation" component={InitialEvaluation} />
       <Route path="/faq" component={Faq} />
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
