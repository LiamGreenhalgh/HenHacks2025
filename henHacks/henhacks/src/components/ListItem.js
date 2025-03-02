function ListItem(props) {
  return (
    <li className={`list-item ${props.oddEven} ${props.selected === props.num - 1 ? 'selected' : ''}`} id={props.num - 1} onClick={(e) => props.setSelected(Number(e.currentTarget.id))}>
      <span>{props.num}</span>
      <span>{props.time}</span>
      <span>{props.source}</span>
      <span>{props.destination}</span>
      <span>{props.protocol}</span>
      <span>{props.length}</span>
      <span>{props.appData}</span>
    </li>
  );
}

export default ListItem;