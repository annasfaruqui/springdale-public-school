import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] overflow-x-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
