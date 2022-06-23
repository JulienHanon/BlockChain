import React, { Component } from 'react'
import Web3 from "web3/dist/web3.min.js";
import { LIST_WEDDING_ABI, LIST_WEDDING_ADDRESS } from './config';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.load()
  }

  async load() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const weddingPartner = new web3.eth.Contract(LIST_WEDDING_ABI, LIST_WEDDING_ADDRESS)// instantiate the smart contract
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
  createCertificate() {
    let partner1 = document.getElementById("partner1").value
    let partner2 = document.getElementById("partner2").value
    if ((partner1 && partner2) === ''){ // if one of the input display an error message
      document.getElementById("errorMsg").style.display = "block"; 
    }else{
      document.getElementById("errorMsg").style.display = "none"; 
      this.state.weddingPartner.methods.createCertificate(partner1, partner2).send({from:this.state.account})//execute the function createCertificate that will create a new contract
    }
    
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
//rajouter un chargement le temps de la transaction
// ajouter un input pour afficher le nom des partenaires 
/*
 	<div>
        <h2>Rentrez l'adresse de votre contrat de mariage : </h2>
        <input type="text" placeholder='Addresse contract'></input>
      </div>
*/

export default App;