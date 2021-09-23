import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import PaymentConfirmed from "./pages/PaymentConfirmed";
import PaymentCancelled from "./pages/PaymentCancelled";
import "./css/style.scss";

import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";

import Home from "./pages/Home";
function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 750,
      easing: "ease-out-quart",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/payment-confirmed">
          <PaymentConfirmed />
        </Route>
        <Route exact path="/payment-cancelled">
          <PaymentCancelled />
        </Route>
      </Switch>
    </>
  );
}

export default App;
