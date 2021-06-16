import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Governance from "./pages/Governance";
import Footer from "./components/Footer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import useWeb3Modal from "./hooks/useWeb3Modal";
import Delegation from "./components/Delegate/Delegate";

import "./App.css";

const THEME = createMuiTheme({
  typography: {
    fontFamily: `Space Grotesk !important`,
  },
});
function App() {
  // const [provider, loadWeb3Modal, logoutOfWeb3Modal, contracts] =
  //   useWeb3Modal();
  return (
    <div className="App">
      <MuiThemeProvider theme={THEME}>
        <Header />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={Governance}
            ></Route>
            <Route
              exact
              path="/governance"
              component={Governance}
            ></Route>

            <Route path="/delegation" component={Delegation}></Route>
          </Switch>
        </Router>

        <Footer />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
