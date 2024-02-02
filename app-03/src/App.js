import ItemCounterCC from "./components/ItemCounterCC";
import ItemCounterFC from "./components/ItemCounterFC";

const App = () => (
  <div className="container-fluid p-4">
    <div className="row p-4">
      <ItemCounterCC />
      <ItemCounterFC />
    </div>
  </div>
);

export default App;
