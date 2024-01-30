import {Fragment} from 'react';
import Banner from "./components/Banner";
import ContactsList from './components/ContactsList';

const App = () => (
  <Fragment>
    <Banner brand="ContactsBook 1.0" />
    <ContactsList />
  </Fragment>
);

export default App;
