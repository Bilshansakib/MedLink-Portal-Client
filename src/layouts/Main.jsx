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
      <div className="font-che">
        <NavBar></NavBar>
      </div>
      <div className="font-fir">
        <Outlet></Outlet>
      </div>
      <div className="font-fah">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
