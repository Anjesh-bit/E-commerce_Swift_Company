import "./List.css";
import { Link } from "react-router-dom";

const List = (props) => {
  return (
    <div className="app___list-wrapper">
      <div className="list-inner-wrapper">
        <div className="app___logo">SWIFT</div>
        <ul>
          <li>
            <Link to="/shop" style={props.linkStyles}>
              {props.shop}
            </Link>
          </li>
          <li>
            <Link to="/about" style={props.linkStyles}>
              {props.about}
            </Link>
          </li>
          <li>
            <Link to="/contact" style={props.linkStyles}>
              {props.contact}
            </Link>
          </li>
          <li>
            <Link to="/shopping-bag" style={props.linkStyles}>
              {props.shoppingBag}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default List;
