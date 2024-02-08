import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from "./components/Banner";
import ContactsList from './components/ContactsList';
import AboutUs from './components/AboutUs';

const App = () => (
  <BrowserRouter>
    <Banner brand="ContactsBook 1.0" />
    <Routes>
      <Route path="/" element={<ContactsList />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
);

export default App;
