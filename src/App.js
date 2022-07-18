import './App.css';
import VendingMachine from './VendingMachine';
import Snack

const SNACKS = [{snack}, ... ]

/**TODO: */
function App({snacks=SNACKS}) {
  return (
    <div className="App">
      //TODO: Browser Router
        Routes
          Route for Vending Machine snacks=snacks /
          snacks.map(s => <Route path=`/${snack.name}`` element={<Snack details={s} />})

      <VendingMachine/>
    </div>
  );
}

export default App;
