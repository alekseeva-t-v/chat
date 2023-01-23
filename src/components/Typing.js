function Typing({ from, time }) {
  return (
    <li>
      <div className="message-data">
      <span className="message-data-name"><i className="fa fa-circle online"></i>{from}</span>
        <span className="message-data-time">{time}</span>
      </div>
    </li>
  );
}

export default Typing;