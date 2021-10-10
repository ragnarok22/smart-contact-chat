export const ChatList = ({ messages }) => {
  return (
    <div>
      {
        messages.map((message, i) => (
          <p key={i}>{message.address} {message.message}</p>
        ))
      }
    </div>
  )
}