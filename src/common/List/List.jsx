import "./List.css";
const List = (props) => {
  return (
    <div className="app___list-wrapper">
      <div className="list-inner-wrapper">
        <div className="app___logo">SWIFT</div>
        <ul>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
          <li>Shoppping Bag</li>
        </ul>
      </div>
    </div>
  );
};

export default List;
