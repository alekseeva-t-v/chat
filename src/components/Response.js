/**
 * Компонент отображающий сообщение типа response. Родительский компонент MessageHistory.
 *
 * @param {string} props.from текстовое указание автора сообщения
 * @param {string} props.time текстовое указание на время сообщения
 * @param {string} props.message текстовое содержимое сообщения
 */
function Response(props) {
  const { from, time, message } = props;

  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">{message}</div>
    </li>
  );
}

export default Response;
