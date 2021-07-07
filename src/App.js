import "./styles.css";
import { FirstPerson, SecondPerson, PersonSwitcher } from "./components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <PersonSwitcher />
      <>
        <Switch>
          <Route path="/" component={FirstPerson} exact />
          <Route path="/first-person" component={FirstPerson} exact />
          <Route path="/second-person" component={SecondPerson} exact />
        </Switch>
      </>
    </BrowserRouter>
  );
}
