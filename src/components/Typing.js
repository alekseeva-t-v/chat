/**
 * Компонент отображающий сообщение типа typing. Родительский компонент MessageHistory.
 *
 * @param {string} props.from текстовое указание автора сообщения
 * @param {string} props.time текстовое указание на время сообщения
 */
function Typing(props) {
  const { from, time } = props;

  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {from}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
    </li>
  );
}

export default Typing;
