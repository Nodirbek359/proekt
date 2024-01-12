import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="lg:flex h-screen">
      <Navbar />
      <main className="max-container">
        <Outlet />
      </main>

      {/*FOOTER */}
    </div>
  );
}

export default MainLayout;
