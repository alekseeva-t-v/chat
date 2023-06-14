import Response from './Response';
import Message from './Message';
import Typing from './Typing';

/**
 * Компонент отображающий список сообщений из истории. Родительский компонент App. Дочерние компоненты Message, Response, Typing
 *
 * @param {object} props.list список сообщений, массив объектов
 */
function MessageHistory(props) {
  const { list } = props;

  const listItems = list.map((item) =>
    item.type === 'message' ? (
      <Message
        key={item.id}
        from={item.from.name}
        time={item.time}
        message={item.text}
      />
    ) : item.type === 'response' ? (
      <Response
        key={item.id}
        from={item.from.name}
        time={item.time}
        message={item.text}
      />
    ) : item.type === 'typing' ? (
      <Typing key={item.id} from={item.from.name} time={item.time} />
    ) : null
  );

  return <ul>{listItems}</ul>;
}

MessageHistory.defaultProps = {
  list: [],
};

export default MessageHistory;
