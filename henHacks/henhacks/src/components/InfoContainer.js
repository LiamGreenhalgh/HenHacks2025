function InfoContainer({ pkt, num, time, appData }) {
    console.log(typeof num);
  return (
    <div className="add-info-container">
      <div className="additional-info">
        <p>{`No. ${num}`}</p>
        <p>{`Time: ${time}`}</p>
        <p>{`Source: ${pkt.source}`}</p>
        <p>{`Destination: ${pkt.destination}`}</p>
        <p>{`Protocol: TCP`}</p>
        <p>{`Length: ${pkt.length}`}</p>
        <p>{`appData: ${appData}`}</p>
      </div>
    </div>
  );
}

export default InfoContainer;
