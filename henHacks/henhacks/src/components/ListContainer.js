import ListItem from "./ListItem";

function ListContainer({ packets }) {
  console.log(packets[0]);
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
        {packets.map((pkt, i) => (
          <ListItem
            num={i + 1}
            time={Date.now()}
            source={pkt.source}
            destination={pkt.destination}
            protocol={pkt.protocol}
            length={pkt.length}
            appData={"Femboy wizards"}
            oddEven={i % 2 === 0 ? "even" : "odd"}
            key={i}
          />
        ))}
        {/* <ListItem oddEven={"odd"} />
        <ListItem oddEven={"even"} /> */}
      </ul>
    </div>
  );
}

export default ListContainer;
