import { Outlet } from "react-router-dom";
import SubBanner from "./components/SubBanner";
import Footer from "./components/Footer";

const DoctorLayout = () => {
  return (
    <div className="doctor-layout">
      <SubBanner title="OUR DOCTOR" />

      <Outlet />
      <Footer />
    </div>
  );
};

export default DoctorLayout;
