import { Fragment } from "react";
import Friends from "./components/Friends";
import Header from "./components/Header";
import Counter from "./components/Counter";

const App = () => (
  <Fragment>
    <Header />
    <Counter />
    <Friends />
  </Fragment>
);

export default App;
