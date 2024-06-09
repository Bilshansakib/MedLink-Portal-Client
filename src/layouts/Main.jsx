import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/Shared/Navbar/NavBar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  console.log(location);
  // const noHeaderNoFooter =
  //   location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      <NavBar></NavBar>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
