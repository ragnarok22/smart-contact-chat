import './Login.css';
import { useState } from 'react';
import getWeb3 from './getWeb3';
import ChatContract from './contracts/Chat.json'

export default function Login() {
  const [loading, setLoading] = useState(false);

  const onLogin = async (e) => {
    setLoading(true);
    // get network provider and web3 instance.
    const web3 = await getWeb3();

    // use web3to get the user's accounts
    const accounts = await web3.eth.getAccounts();

    //get the contract instance
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = ChatContract.networks[networkId];
    const instance = new web3.eth.Contract(
      ChatContract.abi,
      deployedNetwork && deployedNetwork.address,
    )
    setLoading(false);
    console.log(accounts);
    console.log(instance);
  }

  const Logout = async (e) => {
  }

  return (
    <div className="login">
      <h1>Bienvenidos al chat decentralizado</h1>
      <button onClick={onLogin}>
      {loading ? 'Loading' : 'Entrar con MetaMask'}
      </button>
    </div>
  )
}