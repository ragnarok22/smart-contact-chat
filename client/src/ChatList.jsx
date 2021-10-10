export const ChatList = ({ messages }) => {
  return (
    <div>
      {
        messages.map((message, i) => (
          <p key={i}>{message.owner} {message.message}</p>
        ))
      }
    </div>
  )
}