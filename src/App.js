import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Shop from "./components/Shop/Shop";
import ShopPage from "./pages/ShopPage/ShopPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DetailedPage from "./pages/DetailedPage/DetailedPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path="/" element={<HomePage />} />
      <Route exact path="/about" element={<AboutPage />} />
      {/* child routes and render the component using Outlet */}
      <Route exact path="/shop" element={<ShopPage />}>
        <Route index element={<Shop />} />
        <Route exact path=":id" element={<DetailedPage />} />
      </Route>
      <Route exact path="/contact" element={<ContactPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="app___main">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
