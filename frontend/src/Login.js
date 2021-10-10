import './Login.css';
import { useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { injected } from './config';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { active, account, library, connector, activate, deactivate } = useWeb3React();

  const onLogin = async (e) => {
    setLoading(true);
    try {
      await activate(injected)
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const Logout = async (e) => {
    try {
      deactivate()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="login">
      <h1>Bienvenidos al chat decentralizado</h1>
      <button onClick={onLogin}>
      {loading ? 'Loading' : 'Entrar con MetaMask'}
      </button>
      {active ? account : 'no connected'}
    </div>
  )
}