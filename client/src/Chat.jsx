import { useEffect, useState } from "react"
import { ChatList } from "./ChatList";

export const Chat = () => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([{
      address: 'asdfasdf',
      message: 'hola mundo'
    }])
    setLoading(false);

  }, []);

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
    </div>
  )
}