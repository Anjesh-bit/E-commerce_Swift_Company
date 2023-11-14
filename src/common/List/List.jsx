import { useSelector } from "react-redux";
import "./List.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const List = (props) => {
  const { cartData } = useSelector((state) => state.cartData);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const totalCountQty = cartData?.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
    setTotalCount(totalCountQty);
  }, [cartData, totalCount]);

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
              {`${props.shoppingBag} `}
              <span>({`${totalCount}`})</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default List;
