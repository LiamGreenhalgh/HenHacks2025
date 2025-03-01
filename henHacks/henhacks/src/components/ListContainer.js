import ListItem from "./ListItem";

function ListContainer() {
  return (
    <div className="list-container">
      <span>No.</span>
      <span>Time</span>
      <span>Source</span>
      <span>Destination</span>
      <span>Protocol</span>
      <span>Length</span>
      <span>info</span>
      <ul className="list-requests">
        <ListItem oddEven={"odd"} />
        <ListItem oddEven={"even"} />
      </ul>
    </div>
  );
}

export default ListContainer;
