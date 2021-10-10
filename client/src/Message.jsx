import './Message.css'

export const Message = ({ owner, message}) => (
  <div className="message">
    <p className="owner">{owner.substr(0, 5)}...{owner.substr(-5)}:</p>
    <p className="text">{message}</p>
  </div>
)