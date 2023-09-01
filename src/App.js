import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Parser, Navigation, NotFound, Footer } from "./components/index.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="bg-dark text-white">
        <Router>
          <Navigation />
          <Routes>
            <Route
              exact
              path="/economie"
              element={
                <Parser link={"https://www.lemonde.fr/economie/rss_full.xml"} />
              }
            />
            <Route
              exact
              path="/"
              element={<Parser link={"https://www.lemonde.fr/rss/une.xml"} />}
            />
            <Route
              exact
              path="/france"
              element={
                <Parser link={"https://www.lemonde.fr/societe/rss_full.xml"} />
              }
            />
            <Route
              exact
              path="/monde"
              element={
                <Parser
                  link={"https://www.lemonde.fr/international/rss_full.xml"}
                />
              }
            />
            <Route
              exact
              path="/politique"
              element={
                <Parser
                  link={"https://www.lemonde.fr/politique/rss_full.xml"}
                />
              }
            />
            <Route
              exact
              path="/sciences"
              element={
                <Parser link={"https://www.lemonde.fr/sciences/rss_full.xml"} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}
