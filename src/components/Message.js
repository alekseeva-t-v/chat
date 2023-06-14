/**
 * Компонент отображающий сообщение типа message. Родительский компонент MessageHistory.
 *
 * @param {string} props.from текстовое указание автора сообщения
 * @param {string} props.time текстовое указание на время сообщения
 * @param {string} props.message текстовое содержимое сообщения
 */
function Message(props) {
  const { from, time, message } = props;

  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {from}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">{message}</div>
    </li>
  );
}

export default Message;
