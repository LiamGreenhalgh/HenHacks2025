import ListItem from "./ListItem";

function ListContainer({ packets, selected, setSelected }) {
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
            setSelected={setSelected}
            num={i + 1}
            selected={selected}
            time={Date.now()}
            source={pkt.source}
            destination={pkt.destination}
            protocol={pkt.protocol}
            length={pkt.length}
            appData={"Placeholder"}
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
