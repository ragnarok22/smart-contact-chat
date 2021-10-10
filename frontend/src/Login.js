import './Login.css';
import { useEffect } from 'react';
import { useEtherBalance, useEthers } from '@usedapp/core';

export default function Login() {
  const { activeBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <div className="login">
      <h1>Bienvenidos al chat decentralizado</h1>
      <button>Entrar con MetaMask</button>
    </div>
  )
}