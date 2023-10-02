import { Outlet } from "react-router-dom";

const ShopPage = () => {
  return (
    <div className="app__main-shop">
      {/* render the child based on routes  */}
      <Outlet />
    </div>
  );
};

export default ShopPage;
