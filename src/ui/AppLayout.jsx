import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
