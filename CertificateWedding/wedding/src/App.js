import React, { Component } from 'react'
import Web3 from "web3/dist/web3.min.js";
import { LIST_WEDDING_ABI, LIST_WEDDING_ADDRESS, WEDDING_ABI } from './config';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.load()
  }

  async load() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const weddingList = new web3.eth.Contract(LIST_WEDDING_ABI, LIST_WEDDING_ADDRESS)// instantiate the smart contract
    this.setState({ weddingList})
    var weddingPartner = new web3.eth.Contract(WEDDING_ABI, "0x34b17132061C1A52529d9Ab8DD9130c72AfEb8B4")
    this.setState({ weddingPartner})
    const Certificate = await weddingList.methods.getListCertificate().call() //we fetch the address of the contract with the function getListCertificate
    this.setState({ Certificate }) // update the Certificate value with the one we just fetch 
  
    let LastCertificateCreated = Certificate.length - 1 // set the position of the last certificate created to display 
    this.setState({LastCertificateCreated})
    this.setState({ loading: false })
    
  }

  constructor(props) { // initiate our variable with the constructor
    super(props)
    this.state = {
      account: '',
      Certificate: '',
      Partner: 'Name ',
    }

  }
  createCertificate() {
    
    let partner1 = document.getElementById("partner1").value
    let partner2 = document.getElementById("partner2").value
    if ((partner1 && partner2) === ''){ // if one of the input display an error message
      document.getElementById("errorMsg").style.display = "block"; 
    }else{
      document.getElementById("errorMsg").style.display = "none"; 
      this.state.weddingList.methods.createCertificate(partner1, partner2).send({from:this.state.account})//execute the function createCertificate that will create a new contract
    }
 
  }
  DisplayPartners() {
   
  }

  render() {
    return (
      <div className='App'>
      <h1>Creer un certificat de Mariage : </h1>
      <div>
        <input type="text" id="partner1" placeholder="Nom Partenaire 1"></input>
        <input type="text" id="partner2" placeholder="Nom Partenaire 2"></input>
      </div>
      <button onClick={() => {this.createCertificate()}}>Valider</button>
      <p id="errorMsg" className='errorMsg'>Veuillez remplir les deux champs !</p>
      <h1>Certificat de Mariage : </h1> 
      <h2>{this.state.Certificate[this.state.LastCertificateCreated]}</h2>  
    </div>
    );
  }
  
}

export default App;