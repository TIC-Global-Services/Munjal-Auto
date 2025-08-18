import { Outlet } from "react-router-dom";
import ScrollToHash from "./components/ReUsable/ScrollToHash";
import TopNav from "./components/ReUsable/TopNav";
import { FooterMain } from "./components/ReUsable/FooterMain";

function Layout() {
  return (
    <div className="relative">
      <ScrollToHash />
      <div className="z-[100] absolute w-full top-20 flex justify-between items-center">
        <TopNav />
      </div>

      {/* Render children */}
      <div> 
        <Outlet />
      </div>

      <div>
        <FooterMain />
      </div>
    </div>
  );
}

export default Layout;
