import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Services from "./pages/Services";
import Doctor from "./pages/Doctor";
import DoctorLayout from "./DoctorLayout";
import NotFound from "./pages/NotFound";
import DoctorDetails from "./pages/DoctorDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="stories" element={<Stories />} />
      <Route path="services" element={<Services />} />

      <Route path="doctor" element={<DoctorLayout />}>
        <Route index element={<Doctor />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
