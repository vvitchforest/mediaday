import "./App.scss";
import "./styles.scss";

import { Switch, Route, useLocation } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import EventPage from "./pages/EventPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import SchedulePage from "./pages/SchedulePage";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import EventFetch from "./EventFetch";
import { Fade } from "react-awesome-reveal";

function App() {
  const location = useLocation();
  const url = "/data/events.json";
  const eventData = EventFetch(url);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (eventData) {
      const locationData = location.pathname.split("/").reverse();
      const [eventUrl, path] = locationData;

      if (path === "event") {
        const found = eventData.events.find(
          ({ videoUrl }) => videoUrl === eventUrl
        );
        document.title = found?.title;
      }
    }
  });

  return (
    <div className="App">
      <Navigation />

      {/* A <Switch> looks through its children <Route>s and
      
            renders the first one that matches the current URL. */}

      <Switch>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/schedule">
          <SchedulePage />
        </Route>
        <Route path="/event/:id" children={<EventPage />} />
        <Route path="/" exact component={Home}></Route>
      </Switch>

      <Fade>
        <Footer />
      </Fade>
    </div>
  );
}

export default App;
