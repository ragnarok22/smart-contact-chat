import { useEffect, useState } from "react";
import { ChatList } from "./ChatList";
import "./Chat.css";

export const Chat = ({ accounts, contract }) => {
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    (async () => {
      // get all the messages
      const response = await contract.methods.getAllMessages().call();
      setMessages(response);
    })();

    // suscribe to new message
    contract.events
      .newMessage()
      .on("data", (e) => {
        let message = e.returnValues;
        setMessages((prevState) => [
          ...prevState,
          {
            id: message.id,
            owner: message.owner,
            message: message.message,
          },
        ]);
      })
      .on("error", console.error);
    setLoading(false);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    alert('Por favor acepte la transacción en su MetaMask');
    e.target.firstChild.disabled = true;
    const text = e.target.firstChild.value;
    console.log("enviando " + text);
    await contract.methods.addMessage(text).send({ from: accounts[0] });
    console.log("mensaje enviado");
    e.target.firstChild.value = '';
    e.target.firstChild.disabled = false;
    setSending(false);
  };

  if (loading) {
    return (
      <div>
        <h1>Cargando los mensajes</h1>
      </div>
    );
  }

  return (
    <div className="chat">
      <h1>Chat room</h1>
      <div className="chatroom">
        <ChatList account={accounts[0]} messages={messages} />
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="message..." />
        </form>
      </div>
    </div>
  );
};
