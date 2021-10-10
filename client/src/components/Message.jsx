import './Message.css'

export const Message = ({ owner, message, isOwn}) => (
  <div className={`message ${isOwn ? 'own' : ''}`}>
    <p className="owner">{owner.substr(0, 5)}...{owner.substr(-5)}:</p>
    <p className="text">{message}</p>
  </div>
)