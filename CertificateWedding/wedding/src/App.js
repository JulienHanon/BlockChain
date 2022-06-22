import { useEffect, useState } from 'react';
import Web3 from "web3/dist/web3.min.js";
import { LIST_WEDDING_ABI, LIST_WEDDING_ADDRESS } from './config';
import './App.css';

function App() {
  const[account, setAccount] = useState(); // state variable to set account
  const [weddingList, setWeddingList] = useState();
  const [weddings, setWeddings] = useState([]);

  useEffect(()=>{
    async function load() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);

      const weddingList = new web3.eth.Contract(LIST_WEDDING_ABI, LIST_WEDDING_ADDRESS);
      
      setWeddingList(weddingList);

      const counter = await weddingList.methods.count().call();
      
      for (var i = 1; i <= counter; i++) {
        
        const wedding = await weddingList.methods.weddings(i).call();
        
        setWeddings((weddings) => [...weddings, wedding]);
      }
    }
    load();

  }, []);

  return (
    <div className='App'>
      Your account is : {account}
      <h1>Creer un certificat de Mariage : </h1>
      <div>
        <input type="text" placeholder="Nom Partenaire 1"></input>
        <input type="text" placeholder="Nom Partenaire 2"></input>
      </div>
      <button>Valider</button>
      <h1>Certificat de Mariage : </h1>
      <ul>
      {
        Object.keys(weddings).map((wedding, index) => (
          <li key={`${weddings[index].name}-${index}`}>
            <h4>{weddings[index].name}</h4>
          </li>
        ))
      }
      </ul>
    </div>
  );
}

export default App;
