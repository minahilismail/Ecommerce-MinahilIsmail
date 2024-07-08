import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import BrowseCategory from "../browseCategories/BrowseCategories";
const RootLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <BrowseCategory />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
