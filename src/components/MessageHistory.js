import Response from './Response';
import Message from './Message';
import Typing from './Typing';

function MessageHistory({ list }) {
  const listItems = list.map((item) => (item.type === 'response') ? <Response key={item.id} from={item.from.name} time={item.time} message={item.text} /> : (item.type === 'message') ? <Message  key={item.id} from={item.from.name} time={item.time} message={item.text}/> : <Typing  key={item.id} from={item.from.name} time={item.time} />);

  return <ul>{listItems}</ul>;
}


MessageHistory.defaultProps = {
  list: [],
};


export default MessageHistory;
