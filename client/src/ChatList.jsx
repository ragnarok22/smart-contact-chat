import { Message } from "./Message"

export const ChatList = ({ messages }) => {
  return (
    <div>
      {
        messages.map((message, i) => (
          <Message owner={message.owner} message={message.message} />
        ))
      }
    </div>
  )
}