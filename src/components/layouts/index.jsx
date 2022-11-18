import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer className="mt-[60px] md:mt-[120px]">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
