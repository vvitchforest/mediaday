import "./App.scss";
import "./styles.scss";

import { Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import EventPage from "./pages/EventPage";
import Home from "./pages/Home";
import SchedulePage from "./pages/SchedulePage";
import Navigation from "./components/Navigation/Navigation";


function App() {

  return (
    <div className="App">
      <Navigation />

      {/* A <Switch> looks through its children <Route>s and
      
            renders the first one that matches the current URL. */}

      <Switch>
        <Route path="/about">
          <AboutPage name="Irina" />
        </Route>
        <Route path="/schedule">
          <SchedulePage />
        </Route>
        <Route path="/event/:id" children={<EventPage />} />
        <Route path="/" exact component={Home} >
        </Route>
      </Switch>


    </div>
  );
}

export default App;
