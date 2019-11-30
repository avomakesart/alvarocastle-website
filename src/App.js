import React, { Component, Suspense, lazy } from "react";

import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";

import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import { GlobalStyle } from "./global.styles";

const Home = lazy(() => import("./pages/Home/index"));
const Self = lazy(() => import("./pages/Self/index"));
const Work = lazy(() => import("./pages/Work/index"));
const ProfessionalEnglish = lazy(() => import("./pages/Work/ProfessionalEnglish/index"));
const CreativeChaChaCha = lazy(() => import("./pages/Work/ProfessionalEnglish/index"));
const Contact = lazy(() => import("./pages/Contact/index"));

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={Home} />
              <Route path="/self" component={Self} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
              <Route path="/professional-english" component={ProfessionalEnglish} />
              <Route path="/creative-cha-cha-cha" component={CreativeChaChaCha} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </>
    );
  }
}

export default App;
