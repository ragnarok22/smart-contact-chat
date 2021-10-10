import { Message } from "./Message"

export const ChatList = ({ account, messages }) => {
  return (
    <div>
      {
        messages.map((message, i) => (
          <Message
            key={i}
            owner={message.owner}
            message={message.message}
            isOwn={message.owner === account}
          />
        ))
      }
    </div>
  )
}