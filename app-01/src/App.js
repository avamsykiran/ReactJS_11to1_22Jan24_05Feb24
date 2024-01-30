import { Fragment } from "react";
import Friends from "./components/Friends";
import Header from "./components/Header";
import Counter from "./components/Counter";

const App = () => (
  <Fragment>
    <Header appTitle="React JS SPA 1.0" />
    <Counter />
    <Friends initialFriends={["Vamsy","Sagar"]} />
  </Fragment>
);

export default App;
