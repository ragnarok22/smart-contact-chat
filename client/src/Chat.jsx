import { useEffect, useState } from "react"
import { ChatList } from "./ChatList";

export const Chat = ({ web3, accounts, contract}) => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await contract.methods.getAllMessages().call();
      console.log(response);
      setMessages(response);
    })()
    setLoading(false);

  }, []);
  
  const onSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.firstChild.value
    console.log('enviando ' + text)
    await contract.methods.addMessage(text).send({ from: accounts[0] });
    console.log('mensaje enviado')
  }

  if (loading) {
    return (
      <div>
        <h1>Cargando los mensajes</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Chat room</h1>
      <ChatList messages={messages} />
      <form onSubmit={onSubmit}>
        <input type="text" />
      </form>
    </div>
  )
}