import logo from './logo.svg';
import { useState} from "react"
import './App.css';
import MyAlgoConnect from '@randlabs/myalgo-connect';
const myAlgoWallet = new MyAlgoConnect();

/*Warning: Browser will block pop-up if user doesn't trigger myAlgoWallet.connect() with a button interation */


function App() {
  const [address, setAddress] = useState("default");
  const [acctName, setAcctName] = useState("default");

  async function connectToMyAlgo() {
    try {
      const accounts = await myAlgoWallet.connect();
      const addressRes = accounts.map(account => account.address);
      const name = accounts.map(account => account.name);
      console.log(addressRes, "ADDRESS***");
      console.log(name, "NAME***");

      setAddress(addressRes)
      setAcctName(name)
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>Address: {address}</h3>
        <h3>Name: {acctName}</h3>

        <button onClick={() => connectToMyAlgo()} >Connect Wallet</button>
      </header>
    </div>
  );
}

export default App;
