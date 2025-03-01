function ListItem({ oddEven }) {
  return (
    <li className={`list-item ${oddEven}`} id="2">
      <span>2</span>
      <span>0.000299</span>
      <span>128.4.95.62</span>
      <span>23.48.203.102</span>
      <span>TLSv1.2</span>
      <span>3325</span>
      <span>Application Data</span>
    </li>
  );
}

export default ListItem;