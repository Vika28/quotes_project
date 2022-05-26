import React, { Sucpense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from "./pages/AllQuotes";
// import QuoteDetail from "./pages/QuoteDetail";
// import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
// import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));

function App() {
  return (
      <Layout>
          <Sucpense fallback={<div className='centered'>
              <LoadingSpinner />
          </div>}>
              <Switch>
                  <Route path='/' exact>
                      <Redirect to='quotes'/>
                  </Route>
                  <Route path='/quotes' exact>
                      <AllQuotes />
                  </Route>
                  <Route path='/quotes/:quoteId'>
                      <QuoteDetail />
                  </Route>
                  <Route path='/new-quote'>
                      <NewQuote />
                  </Route>
                  <Route path='*'>
                      <NotFound />
                  </Route>
              </Switch>
          </Sucpense>
      </Layout>
  );
}

export default App;
