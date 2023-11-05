import List from "../../common/List/List";

const linkStyles = {
  color: "rgb(68, 67, 67)",
  textDecoration: "none",
};

const Header = () => {
  return (
    <List
      shop="Shop"
      about="About"
      contact="Contact"
      shoppingBag="Shopping Bag"
      linkStyles={linkStyles}
    />
  );
};

export default Header;
