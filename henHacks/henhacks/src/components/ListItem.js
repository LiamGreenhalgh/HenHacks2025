function ListItem(props) {
  return (
    <li className={`list-item ${props.oddEven}`} id={props.num - 1} onClick={(e) => props.setSelected(Number(e.currentTarget.id))}>
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