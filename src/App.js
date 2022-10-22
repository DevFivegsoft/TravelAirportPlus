import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Home from "./navPages/Home";
import AirportParking from "./navPages/AirportParking";
import CustomerSupport from "./navPages/CustomerSupport";
import Faqs from "./navPages/Faqs";
import Hotel from "./navPages/HotelModule/Hotel";
import HotelDetail from "./navPages/HotelModule/HotelDetail";
import HotelListing from "./navPages/HotelModule/HotelListing";
import ParkingTypes from "./navPages/ParkingTypes";
import HelpDesk from "./navPages/HelpDesk";
import AllAirports from "./navPages/AllAirports";
import Blogs from "./footerPages/Blogs";
import AirportGuide from "./footerPages/AirportGuide";
import BlogDetail from "./footerPages/BlogDetail";
import Policy from "./footerPages/Policy";
import Terms from "./footerPages/Terms";
import Sitemap from "./footerPages/Sitemap";
import Error from "./navPages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="airport-parking" element={<AirportParking />} />
          <Route path="CustomerSupport" element={<CustomerSupport />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="hotel" element={<Hotel />} />
          <Route path="hotel-detail" element={<HotelDetail />} />
          <Route path="hotel-listing" element={<HotelListing />} />
          <Route path="parking-types" element={<ParkingTypes />} />
          <Route path="HelpDesk" element={<HelpDesk />} />
          <Route path="all-airports" element={<AllAirports />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="AirportGuide" element={<AirportGuide />} />
          <Route path="BlogDetail" element={<BlogDetail />} />
          <Route path="policy-policy" element={<Policy />} />
          <Route path="terms-and-conditions" element={<Terms />} />
          <Route path="Sitemap" element={<Sitemap />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;