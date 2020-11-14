import React from "react";
import { ThemeProvider, Arwes, createTheme } from "arwes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/search/"

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path={["/", "/search"]}>
                <Search/>
              </Route>
              <Route exact path="/saved">
                <h1>Saved</h1>
              </Route>
              <Route >
                <h1>404</h1>
              </Route>

            </Switch>
          </Router>
        </div>
      </Arwes>
    </ThemeProvider>
  );
}


export default App;
