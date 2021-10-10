import './Login.css';
import { useEffect, useState } from 'react';
import getWeb3 from '../getWeb3';
import ChatContract from '../Chat.json'
import { Chat } from './Chat';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);

  const connect = async () => {
    setLoading(true);
    try {
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

      setWeb3(web3);
      setAccounts(accounts);
      setContract(instance);
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.log(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    connect();
  }, []);

  if (contract) {
    return (
      <Chat accounts={accounts} contract={contract} />
    )
  }

  return (
    <div className="login">
      <h1>Bienvenidos al chat decentralizado</h1>
      <p>
        {accounts ? `Wallet conectada ${accounts[0]}` : 'Loading'}
      </p>
    </div>
  )
}
