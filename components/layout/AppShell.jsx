import { ReactLenis } from "lenis/react";
import React from "react";
import { Footer, Navbar } from ".";

const AppShell = ({ children }) => {
  return (
    <>
      <ReactLenis />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppShell;
