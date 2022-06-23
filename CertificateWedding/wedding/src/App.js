import React, { Component } from 'react'
import Web3 from "web3/dist/web3.min.js";
import { WEDDING_ABI, WEDDING_ADDRESS } from './config';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.load()
  }

  async load() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const weddingPartner = new web3.eth.Contract(WEDDING_ABI, WEDDING_ADDRESS)// instantiate the smart contract
    this.setState({ weddingPartner})
    console.log("contract : ", weddingPartner)
    const Certificate = await weddingPartner.methods.getListCertificate().call() //we fetch the address of the contract with the function getListCertificate
    this.setState({ Certificate }) // update the getListCertificate value with the one we just fetch 
    let LastCertificateCreated = Certificate.length - 1 // set the position of the last certificate created to display 
    this.setState({LastCertificateCreated})
  }

  constructor(props) { // initiate our variable with the constructor
    super(props)
    this.state = {
      account: '',
      Certificate: '',
    }

  }

  render() {
    return (
      <div className='App'>
      Your account is : {this.state.account}
      <h1>Creer un certificat de Mariage : </h1>
      <div>
        <input type="text" id="partner1" placeholder="Nom Partenaire 1"></input>
        <input type="text" id="partner2" placeholder="Nom Partenaire 2"></input>
      </div>
      <button>Valider</button>
      <h1>Certificat de Mariage : {this.state.Certificate[this.state.LastCertificateCreated]}</h1> 
     
    </div>
    );
  }
}

export default App;