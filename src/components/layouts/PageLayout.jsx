import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const PageLayout = ({ children, hideFooterOnLargeScreen }) => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      {children}
      {hideFooterOnLargeScreen ? (
        <div className="md:hidden">
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default PageLayout;
