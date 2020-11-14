import React from "react";
import { ThemeProvider, Arwes, createTheme, Content} from "arwes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/search/"
import Saved from "./pages/saved/"
import Nav from "./components/navbar/"

function App() {


  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes>
        <Content>
          <div className="App">
            <Router>
              <Nav />
              <Switch>
                <Route exact path={["/", "/search"]}>
                  <Search />
                </Route>
                <Route exact path="/saved">
                  <Saved />
                </Route>
                <Route >
                  <h1>404</h1>
                </Route>

              </Switch>
            </Router>
          </div>
        </Content>
      </Arwes>
    </ThemeProvider>
  );
}


export default App;
