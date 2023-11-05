import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ShopPage = () => {
  return (
    <div className="app__main-shop">
      <Header />
      {/* render the child based on routes  */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default ShopPage;
